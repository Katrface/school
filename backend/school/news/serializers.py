from rest_framework import serializers

from news.models import *


class ReaderCardSerializer(serializers.ModelSerializer):
    """Карточки для читателей"""
    class Meta:
        model = Card
        field = ('id', 'title', 'img_link', 'vk_link')


class CardSerializer(serializers.ModelSerializer):
    """Карточка для CRUD"""
    class Meta:
        model = Card
        fields = ('id', 'title', 'img_link', 'vk_link', 'status', 'public_date')


class GroupSerializer(serializers.ModelSerializer):
    """Группа для CRUD"""
    class Meta:
        model = Group
        fields = ('id', 'name', 'description', 'status')


class GroupWithCardsIdSerializer(serializers.ModelSerializer):
    """Группа с id карточек"""
    class Meta:
        model = Group
        fields = ('id', 'name', 'description', 'status', 'cards')


class GroupWithCardsSerializer(serializers.ModelSerializer):
    """Группа с раскрытыми карточками"""
    cards = CardSerializer(many=True)

    class Meta:
        model = Group
        fields = ('id', 'name', 'description', 'status', 'cards')
