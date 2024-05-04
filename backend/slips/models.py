from django.db import models
from patients.models import PatientModel
from services.models import ServicesModel
from django.contrib.auth.models import User


class SlipsModel(models.Model):
    patient_detail = models.ForeignKey(PatientModel,on_delete=models.SET_NULL,null=True)
    service_detail = models.ForeignKey(ServicesModel,on_delete=models.SET_NULL,null=True)
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    created_at = models.DateTimeField(auto_now=True)
