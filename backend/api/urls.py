from rest_framework import routers
from .viewsets.card_viewsets import CardViewSet

router = routers.SimpleRouter()
router.register(r'cards', CardViewSet)
urlpatterns = router.urls
