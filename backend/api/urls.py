from rest_framework import routers
from .viewsets.card_viewsets import CardViewSet, CardAnswerViewset

router = routers.SimpleRouter()
router.register(r'cards', CardViewSet)
router.register(r'answer', CardAnswerViewset)
urlpatterns = router.urls
