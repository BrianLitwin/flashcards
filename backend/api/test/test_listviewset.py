from django.test import TestCase
from rest_framework.test import APIClient
from card.models import Card, Group, CardAnswer, List, Session
from .factories import CardFactory, GroupFactory, ListFactory

class Test_ListViewSet(TestCase):
    def test_list_create(self):
        group_ids = []
        for i in range(3):
            group = GroupFactory()
            group_ids.append(group.id)

        data = {'groups': group_ids, 'name': 'test_name'}
        response = self.client.post('/api/list/', data)

        self.assertEqual(response.status_code, 201)
        list = List.objects.get(id=response.data.get('id'))
        self.assertEqual(list.groups.count(), 3)

    def test_list_get_cards(self):
        list = ListFactory()

        for i in range(3):
            group = GroupFactory()
            list.groups.add(group)

            for i in range(3):
                card = CardFactory()
                group.card_set.add(card)

        response = self.client.get(f'/api/list/{list.id}/')
        cards = response.data.get('cards')
        groups = response.data.get('groups')
        self.assertEqual(len(cards), 9)
        self.assertEqual(len(groups), 3)

    def test_list_edit_groups(self):
        list = ListFactory()
        group_ids = []
        for i in range(2):
            group = GroupFactory()
            group_ids.append(group.id)

        data = {'groups': group_ids}
        self.client.post(f'/api/list/{list.id}/edit_groups/', data)
        self.assertEqual(list.groups.count(), 2)

        data = {'groups': []}
        self.client.post(f'/api/list/{list.id}/edit_groups/', data)
        self.assertEqual(list.groups.count(), 0)
