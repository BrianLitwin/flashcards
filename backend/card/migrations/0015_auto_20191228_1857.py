# Generated by Django 2.2.7 on 2019-12-28 18:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0014_remove_list_cards'),
    ]

    operations = [
        migrations.AddField(
            model_name='session',
            name='test_all',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='session',
            name='list',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='card.List'),
        ),
    ]