from django.test import TestCase
from rest_framework.test import APIClient
from card.models import Card, Group, CardAnswer, List, Session
from .factories import CardFactory

class TestAPIs(TestCase):
    def setUp(self):
        self.client = APIClient()

    def __make_session(self):
        card = CardFactory()
        list = List.objects.create(name="test_list")
        list.cards.add(card)
        list.save()
        session = Session.objects.create(list=list)
        return (card, session, list)

    def test_create_card(self):
        data = {'question': 'question 1', 'answer': 'answer 1', 'url': 'newUrl', 'page_offset': 0}
        response = self.client.post('/api/card/', data)
        group = Group.objects.get(name=data['url'], url=data['url'])
        card = Card.objects.get(question=data['question'])
        self.assertEqual(card.groups.count(), 1)
        self.assertEqual(card.groups.first(), group)

    def test_create_card_added_to_list(self):
        url = "new url"
        data = {'question': 'question 1', 'answer': 'answer 1', 'url': url, 'page_offset': 0}
        list = List.objects.create(name="test_list")
        group = Group.objects.create(name="test group", url=url)
        list.groups.add(group)
        self.assertEqual(list.cards.count(), 0)
        response = self.client.post('/api/card/', data)
        self.assertEqual(list.cards.count(), 1)


    def test_card_answer(self):
        card = CardFactory()
        list = List.objects.create(name="test_list")
        list.cards.add(card)
        list.save()
        session = Session.objects.create(list=list)
        data = {
            'card': card.pk,
            'session': session.pk,
            'correct': True
        }

        # create card
        response = self.client.post('/api/answer/', data)
        answer = CardAnswer.objects.first()
        self.assertEqual(answer.correct, True)

        #update card
        data['correct'] = False
        response = self.client.post('/api/answer/', data)
        answer = CardAnswer.objects.first()
        self.assertEqual(answer.correct, False)
        self.assertEqual(CardAnswer.objects.count(), 1)

    def test_list_sessions(self):
        card = CardFactory()
        list = List.objects.create(name="test_list")
        list.cards.add(card)
        list.save()
        Session.objects.create(list=list)
        Session.objects.create(list=list)
        self.assertEqual(Session.objects.count(), 2)
        response = self.client.get(f'/api/list/{list.pk}/sessions/')
        self.assertEqual(len(response.data), 2)
