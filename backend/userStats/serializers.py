from rest_framework import serializers
from .models import UserStatsModel,User
from api.serializers import UserSerializer



class UserStatsSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = UserStatsModel
        fields = ["id","totalPatientsDealt","totalSale","user"]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user).data
        return representation
