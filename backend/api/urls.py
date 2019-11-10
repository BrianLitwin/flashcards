from rest_framework import routers
from .viewsets.card_viewsets import GroupViewSet, CardViewSet, CardAnswerViewset

router = routers.SimpleRouter()
router.register(r'card', CardViewSet)
router.register(r'answer', CardAnswerViewset)
router.register(r'group', GroupViewSet)
urlpatterns = router.urls
