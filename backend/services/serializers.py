from rest_framework import serializers
from .models import ServicesModel



class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesModel
        fields = '__all__'