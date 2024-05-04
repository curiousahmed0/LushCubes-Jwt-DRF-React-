# Generated by Django 5.0.4 on 2024-05-03 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ServicesModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_name', models.CharField(max_length=100)),
                ('service_price', models.IntegerField()),
                ('service_avail', models.BooleanField()),
            ],
        ),
    ]
