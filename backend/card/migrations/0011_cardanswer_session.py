# Generated by Django 2.2.7 on 2019-11-17 17:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0010_session'),
    ]

    operations = [
        migrations.AddField(
            model_name='cardanswer',
            name='session',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='card.Session'),
            preserve_default=False,
        ),
    ]
