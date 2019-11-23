from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from card.models import CardAnswer, Group, Card, List, Session
from card.serializers import CardSerializer, CardAnswerSerializer, GroupSerializer, ListSerializer, SessionSerializer
from rest_framework.response import Response
from  django.utils import timezone

class CardViewSet(ModelViewSet):
    authentication_classes = [] # let any requests in for deving
    permission_classes = (permissions.AllowAny,)
    queryset = Card.objects.all()
    serializer_class = CardSerializer

    def create(self, request):
        url = request.data.get('url')
        group, created = Group.objects.get_or_create(url=url)
        if created:
            group.name = url
            group.save()

        serialized = self.serializer_class(data=request.data)
        if serialized.is_valid():
            card = serialized.save()
            card.groups.add(group)
            card.save()
            return Response(201)
        else:
            return Response(serialized.errors, 401)

    @action(detail=True, methods=['POST'])
    def add_group(self, request, pk):
        card = Card.objects.get(pk=pk)
        group = Group.objects.get(pk=request.data.get('group'))
        card.groups.add(group)
        card.save()
        return Response(200)

class GroupViewSet(ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    @action(detail=True, methods=['GET'])
    def cards(self, request, pk):
        group = Group.objects.get(pk=pk)
        cards = CardSerializer(group.card_set.all(), many=True)
        return Response(cards.data, 200)

class CardAnswerViewset(ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = CardAnswer.objects.all()
    serializer_class = CardAnswerSerializer

    def create(self, request):
        data = request.data.copy()
        data['date'] = timezone.now()
        answer = CardAnswer.objects.filter(
            session_id=data['session'],
            card_id=data['card']
        ).first()

        if answer:
            answer.correct = data['correct']
            answer.date = data['date']
            answer.save()
            return Response(201)

        else:
            serialized = self.serializer_class(data=data)
            if serialized.is_valid():
                serialized.save()
                return Response(201)
            else:
                return Response(serialized.errors, 401)

class ListViewSet(ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = List.objects.all()
    serializer_class = ListSerializer

    # total hack job.. look into this more.. why data['cards'] doesn't work
    # after adding a field to the serializer
    def create(self, request):
        cards = request.data.get('cards')
        serialized = self.serializer_class(data=request.data)
        if serialized.is_valid():
            list = serialized.save()
            for id in cards:
                card = Card.objects.get(id=id)
                list.cards.add(card)
            list.save()
            serialized = ListSerializer(list)
            return Response(serialized.data, 201)
        else:
            return Response(serialized.errors, 401)

    @action(detail=True, methods=['GET'])
    def sessions(self, request, pk):
        list = List.objects.get(pk=pk)
        sessions = list.session_set.all()
        serialized = SessionSerializer(sessions, many=True)
        return Response(serialized.data, 200)

class SessionViewSet(ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
