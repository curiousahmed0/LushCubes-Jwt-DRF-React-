from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['age', 'salary', 'designation']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['id','first_name', 'last_name', 'username', 'password', 'profile']


    def validate(self, data):
        username = data.get('username')
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("Username already exists. Please use a different one.")
        return data
    
    def validate_profile(self, profile_data):
        required_fields = ['age', 'salary', 'designation']
        for field in required_fields:
            if field not in profile_data:
                raise serializers.ValidationError(f"Profile field '{field}' is required.")
        return profile_data


    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        # Lowercase the username
        username = validated_data.get('username')
        validated_data['username'] = username.lower()
        user = User.objects.create_user(**validated_data)
        Profile.objects.create(user=user, **profile_data)
        return user
    
    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile', None)
        if profile_data:
            profile_serializer = self.fields['profile']
            profile_instance = instance.profile

            for attr, value in profile_data.items():
                setattr(profile_instance, attr, value)
            profile_instance.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance



class LoginSerializer(serializers.Serializer):
     username = serializers.CharField()
     password = serializers.CharField()


     def validate(self,data):
          if not User.objects.filter(username = data['username']).exists():
               raise serializers.ValidationError("there is no user with this username")
          return data

     
     
     def get_tokens_for_user(self,data):
        user = authenticate(username = data['username'],password = data['password'])

        if not user:
             raise serializers.ValidationError("wrong password")



        refresh = RefreshToken.for_user(user)
        return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }          
     



class RefreshTokenSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        refresh = attrs.get("refresh")

        try:
            token = RefreshToken(refresh)
            token_data = {"refresh": refresh, "access": str(token.access_token)}
            return token_data
        except Exception as e:
            raise serializers.ValidationError("Invalid token")
     

