from rest_framework.serializers import ModelSerializer
from .models import CardAnswer, Card

class CardSerializer(ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'

class CardAnswerSerializer(ModelSerializer):
    class Meta:
        model = CardAnswer
        fields = '__all__'
