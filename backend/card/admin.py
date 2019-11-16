from django.contrib import admin

from .models import Card, Group, CardAnswer, List

admin.site.register(Card)
admin.site.register(Group)
admin.site.register(CardAnswer)
admin.site.register(List)
