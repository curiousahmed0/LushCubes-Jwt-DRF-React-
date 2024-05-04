from rest_framework import serializers
from .models import User,CashTallyModel
from api.serializers import UserSerializer




class CashTallySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = CashTallyModel
        fields = ["id","patient_name","service_name","service_price","slip_id","user"]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user).data
        return representation
