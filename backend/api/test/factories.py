from factory.django import DjangoModelFactory
from card.models import Card, List, Group, Session

class CardFactory(DjangoModelFactory):
    class Meta:
        model = Card

    question = "question"
    answer = "answer"
    url = "google.com"
    page_offset = 0

class GroupFactory(DjangoModelFactory):
    class Meta:
        model = Group

class ListFactory(DjangoModelFactory):
    class Meta:
        model = List

class SessionFactory(DjangoModelFactory):
    class Meta:
        model = Session
