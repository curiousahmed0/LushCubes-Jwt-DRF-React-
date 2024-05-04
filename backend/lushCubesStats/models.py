from django.db import models



class LushCubesStats(models.Model):
    total_patients = models.IntegerField()
    total_services = models.IntegerField()
    total_users = models.IntegerField()
    total_sale = models.BigIntegerField()


    def __str__(self):
        return self.total_patients
    
