# Generated by Django 2.2.7 on 2019-11-16 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0008_group_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='type',
        ),
        migrations.CreateModel(
            name='List',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('cards', models.ManyToManyField(blank=True, to='card.Card')),
            ],
        ),
    ]
