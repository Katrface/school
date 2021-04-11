from rest_framework import viewsets, mixins
from rest_framework.viewsets import GenericViewSet

from news.models import *
from news.serializers import *
from news.services.card_filter import getPublishedCards, getEventCards
from news.services.pagination import PaginationCard


class CardViewSet(viewsets.ModelViewSet):
    """Карта CRUD"""
    queryset = Card.objects.all()
    serializer_class = CardSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """Группа CRUD"""
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    pagination_class = PaginationCard


class PublishedCardsView(GenericViewSet, mixins.ListModelMixin):
    """Список карточек для читателя из группы 'Опубликованно'"""
    queryset = getPublishedCards()
    serializer_class = ReaderCardSerializer
    pagination_class = PaginationCard


class EventCardsView(GenericViewSet, mixins.ListModelMixin):
    """Список карточек для читателя из группы 'События'"""
    queryset = getEventCards()
    serializer_class = ReaderCardSerializer
    pagination_class = PaginationCard
