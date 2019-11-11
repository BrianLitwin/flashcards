from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from card.models import CardAnswer, Group, Card
from card.serializers import CardSerializer, CardAnswerSerializer, GroupSerializer
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

class CardAnswerViewset(ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = CardAnswer.objects.all()
    serializer_class = CardAnswerSerializer

    def create(self, request):
        data = request.data
        data['date'] = timezone.now()
        serialized = self.serializer_class(data=data)
        if serialized.is_valid():
            serialized.save()
            return Response(201)
        else:
            return Response(serialized.errors, 401)
