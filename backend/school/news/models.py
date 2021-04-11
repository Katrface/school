from django.db import models


class Card(models.Model):
    """Карта статьи"""
    title = models.CharField("Заголовок", max_length=255)
    vk_link = models.TextField("Ссылка на статью для VK API")
    img_link = models.TextField("Картинка")
    status = models.CharField("Статус", max_length=1, default='n')
    public_date = models.DateField("Дата публикации", null=True)

    def __str__(self):
        return self.title


class Group(models.Model):
    """Группы карточек статей"""
    name = models.CharField("Название", max_length=255)
    description = models.TextField("Описание")
    status = models.CharField("Статус", max_length=1, default='n')
    cards = models.ManyToManyField(Card, verbose_name="Карточки", related_name="cards")

    def __str__(self):
        return self.name
