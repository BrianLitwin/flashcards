from django.test import TestCase
from rest_framework.test import APIClient
from card.models import Card, Group

class TestAPIs(TestCase):

    def test_new_card(self):
        client = APIClient()
        data = {'question': 'question 1', 'answer': 'answer 1', 'url': 'newUrl', 'page_offset': 0}
        response = client.post('/api/card/', data)
        group = Group.objects.get(name=data['url'], url=data['url'])
        card = Card.objects.get(question=data['question'])
        self.assertEqual(card.groups.count(), 1)
        self.assertEqual(card.groups.first(), group)
