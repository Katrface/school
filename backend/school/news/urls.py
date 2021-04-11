from rest_framework.routers import DefaultRouter

from news.views import *


router = DefaultRouter()

router.register(r'card', CardViewSet, basename='card')
router.register(r'group', GroupViewSet, basename='group')

router.register(r'eventCards', EventCardsView, basename='eventCard')
router.register(r'publishedCards', PublishedCardsView, basename='publishedCard')

urlpatterns = router.urls
