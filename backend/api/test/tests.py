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

    def test_new_card(self):
        data = {'question': 'question 1', 'answer': 'answer 1', 'url': 'newUrl', 'page_offset': 0}
        response = self.client.post('/api/card/', data)
        group = Group.objects.get(name=data['url'], url=data['url'])
        card = Card.objects.get(question=data['question'])
        self.assertEqual(card.groups.count(), 1)
        self.assertEqual(card.groups.first(), group)

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

    def test_list_create(self):
        card_ids = []
        for i in range(3):
            card = CardFactory()
            card_ids.append(card.id)

        data = {'cards': card_ids, 'name': 'test_name'}
        response = self.client.post('/api/list/', data)
        
        self.assertEqual(response.status_code, 201)
        list = List.objects.get(id=response.data.get('id'))
        self.assertEqual(list.cards.count(), 3)
