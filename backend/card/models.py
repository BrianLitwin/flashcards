from django.db import models

# Create your models here.

class Card(models.Model):
    question = models.TextField()
    answer = models.TextField()
