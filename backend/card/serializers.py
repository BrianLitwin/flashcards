from rest_framework.serializers import ModelSerializer
from .models import Group, CardAnswer, List, Card, Session

class GroupSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

class CardSerializer(ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'

class CardAnswerSerializer(ModelSerializer):
    class Meta:
        model = CardAnswer
        fields = '__all__'

class ListSerializer(ModelSerializer):
    cards = CardSerializer(read_only=True, many=True)

    class Meta:
        model = List
        fields = '__all__'

class SessionSerializer(ModelSerializer):
    answers = CardAnswerSerializer(read_only=True, many=True)

    class Meta:
        model = Session
        fields = '__all__'
