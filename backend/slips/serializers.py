from rest_framework import serializers
from .models import SlipsModel,PatientModel,ServicesModel,User
from patients.serializers import PatientSerializer
from api.serializers import UserSerializer
from services.serializers import ServicesSerializer

# class SlipsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SlipsModel
#         fields = "__all__"
#         depth = 1
        
        

class SlipsSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    patient_detail = serializers.PrimaryKeyRelatedField(queryset=PatientModel.objects.all())
    service_detail = serializers.PrimaryKeyRelatedField(queryset=ServicesModel.objects.all())

    class Meta:
        model = SlipsModel
        fields = ['id', 'created_at', 'user', 'patient_detail', 'service_detail']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user).data
        representation['patient_detail'] = PatientSerializer(instance.patient_detail).data
        representation['service_detail'] = ServicesSerializer(instance.service_detail).data
        return representation