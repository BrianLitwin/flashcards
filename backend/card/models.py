from django.db import models
from django.utils import timezone


class Session(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    list = models.ForeignKey('card.List', on_delete=models.CASCADE, null=True)
    test_all = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.answers.count()}'

# change the name of List to something else
class List(models.Model):
    name = models.CharField(max_length=256)
    groups = models.ManyToManyField('card.Group', blank=True)

    def cards(self):
        return [card for group in self.groups.all() for card in group.card_set.all()]

    def __str__(self):
        return f'{self.name}  ({len(self.cards())})'

class Group(models.Model):
    # the source of a card/s e.g. the website
    # update to that groups are added automatically
    name = models.CharField(max_length=256)
    url = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name

class Card(models.Model):
    question = models.TextField()
    answer = models.TextField()
    url = models.CharField(max_length=256, null=True)
    page_offset = models.FloatField()
    groups = models.ManyToManyField(Group, blank=True)

    def __str__(self):
        return self.question

class CardAnswer(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    correct = models.BooleanField()
    session = models.ForeignKey(
        'card.Session',
        on_delete=models.CASCADE,
        related_name='answers'
    )

    class Meta:
        unique_together = [['session', 'card']]
