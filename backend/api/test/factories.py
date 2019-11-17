from factory.django import DjangoModelFactory
from card.models import Card

class CardFactory(DjangoModelFactory):
    class Meta:
        model = Card

    question = "question"
    answer = "answer"
    url = "google.com"
    page_offset = 0
