from django.db import models
from django.contrib.auth.models import User



class UserStatsModel(models.Model):
    totalPatientsDealt = models.IntegerField()
    totalSale = models.BigIntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)


    def __str__(self) -> str:
        return self.totalPatientsDealt
