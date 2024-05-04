from rest_framework import serializers
from .models import LushCubesStats


class LushCubesStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LushCubesStats
        fields = '__all__'