from django.db import models
from django.utils import timezone

# Create your models here.
# want a concept of a session or list

class Group(models.Model):
    name = models.CharField(max_length=256)

class Card(models.Model):
    question = models.TextField()
    answer = models.TextField()
    url = models.CharField(max_length=256)
    page_offset = models.IntegerField()
    groups = models.ManyToManyField(Group)

class CardAnswer(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    correct = models.BooleanField()
