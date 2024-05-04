from django.db import models



class ServicesModel(models.Model):
    service_name = models.CharField(max_length=100)
    service_price = models.IntegerField()
    service_avail = models.BooleanField()


    def __str__(self) -> str:
        return self.service_name
