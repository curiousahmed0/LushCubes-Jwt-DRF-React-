# Generated by Django 5.0.4 on 2024-05-03 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LushCubesStats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_patients', models.IntegerField()),
                ('total_services', models.IntegerField()),
                ('total_users', models.IntegerField()),
                ('total_sale', models.IntegerField()),
            ],
        ),
    ]
