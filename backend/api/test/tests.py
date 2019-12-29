from django.test import TestCase
from rest_framework.test import APIClient
from card.models import Card, Group, CardAnswer, List, Session
from .factories import CardFactory, SessionFactory
from datetime import datetime, timedelta

class TestAPIs(TestCase):
    def setUp(self):
        self.client = APIClient()

    #
    # def test_create_card(self):
    #     data = {'question': 'question 1', 'answer': 'answer 1', 'url': 'newUrl', 'page_offset': 0}
    #     response = self.client.post('/api/card/', data)
    #     group = Group.objects.get(name=data['url'], url=data['url'])
    #     card = Card.objects.get(question=data['question'])
    #     self.assertEqual(card.groups.count(), 1)
    #     self.assertEqual(card.groups.first(), group)
    #
    # def test_create_card_added_to_list(self):
    #     url = "new url"
    #     data = {'question': 'question 1', 'answer': 'answer 1', 'url': url, 'page_offset': 0}
    #     list = List.objects.create(name="test_list")
    #     group = Group.objects.create(name="test group", url=url)
    #     list.groups.add(group)
    #     self.assertEqual(len(list.cards()), 0)
    #     response = self.client.post('/api/card/', data)
    #     self.assertEqual(len(list.cards()), 1)
    #
    #
    # def test_card_answer(self):
    #     card = CardFactory()
    #     list = List.objects.create(name="test_list")
    #     list.cards.add(card)
    #     list.save()
    #     session = Session.objects.create(list=list)
    #     data = {
    #         'card': card.pk,
    #         'session': session.pk,
    #         'correct': True
    #     }
    #
    #     # create card
    #     response = self.client.post('/api/answer/', data)
    #     answer = CardAnswer.objects.first()
    #     self.assertEqual(answer.correct, True)
    #
    #     #update card
    #     data['correct'] = False
    #     response = self.client.post('/api/answer/', data)
    #     answer = CardAnswer.objects.first()
    #     self.assertEqual(answer.correct, False)
    #     self.assertEqual(CardAnswer.objects.count(), 1)
    #
    # def test_list_sessions(self):
    #     card = CardFactory()
    #     list = List.objects.create(name="test_list")
    #     Session.objects.create(list=list)
    #     Session.objects.create(list=list)
    #     self.assertEqual(Session.objects.count(), 2)
    #     response = self.client.get(f'/api/list/{list.pk}/sessions/')
    #     self.assertEqual(len(response.data), 2)
    #
    def test_testall_no_prev_sessions(self):
        response = self.client.get('/api/session/testall/')
        self.assertEqual(Session.objects.count(), 1)

    def test_testall_prev_session_over_week_old(self):
        session = SessionFactory()
        session.test_all = True
        session.date = datetime.now() - timedelta(days=8)
        session.save()
        response = self.client.get('/api/session/testall/')
        new_session = Session.objects.get(id=response.data.get('id'))
        self.assertNotEqual(new_session.id, session.id)

    def test_testall_prev_session_under_week_old(self):
        session = SessionFactory()
        session.test_all = True
        session.date = datetime.now() - timedelta(days=6)
        session.save()
        response = self.client.get('/api/session/testall/')
        print(response.data)
        _session = Session.objects.get(id=response.data.get('id'))
        self.assertEqual(_session.id, session.id)
