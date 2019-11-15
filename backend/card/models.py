from django.db import models
from django.utils import timezone

# Create your models here.
# want a concept of a session or list
# a concept of a source => url, or other
# change the url when you click on items on the menu
# a make list workflow =>

class Group(models.Model):
    name = models.CharField(max_length=256)
    url = models.CharField(max_length=500, null=True)

class Card(models.Model):
    question = models.TextField()
    answer = models.TextField()
    url = models.CharField(max_length=256, null=True)
    page_offset = models.IntegerField()
    groups = models.ManyToManyField(Group, blank=True)

    def __str__(self):
        return self.question

class CardAnswer(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    correct = models.BooleanField()
