from django.db import models
from django.contrib.auth.models import User


class CashTallyModel(models.Model):
    patient_name = models.CharField(max_length=100)
    service_name = models.CharField(max_length=100)
    service_price = models.IntegerField()
    slip_id = models.IntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)