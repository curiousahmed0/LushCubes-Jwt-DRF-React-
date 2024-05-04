from django.db import models



class PatientModel(models.Model):
    patient_name = models.CharField(max_length=100)
    patient_age = models.IntegerField()
    patient_gender = models.BooleanField()
    patient_mbn = models.CharField(max_length=100)
    patient_cnic = models.CharField(max_length=100)



    def __str__(self) -> str:
        return self.patient_name
