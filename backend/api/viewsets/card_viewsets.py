from rest_framework import viewsets, permissions
from card.models import CardAnswer, Card
from card.serializers import CardSerializer, CardAnswerSerializer
from rest_framework.response import Response
from  django.utils import timezone

class CardViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class CardAnswerViewset(viewsets.ModelViewSet):
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
