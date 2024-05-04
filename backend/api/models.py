from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    designation = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username + "'s Profile"
