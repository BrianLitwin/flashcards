# Generated by Django 2.2.7 on 2019-11-08 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0003_auto_20191108_2147'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='groups',
            field=models.ManyToManyField(to='card.Group'),
        ),
    ]
