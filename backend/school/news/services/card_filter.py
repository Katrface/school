from news.models import *


GROUP_PUBLISHED = "Опубликованные"
GROUP_EVENT = "События"
#TODO сделать дефолтную инициализацию данных групп

#TODO get заменить на filter
def getCardsByGroup(group_name):
    return Group.objects.get(name=group_name).cards.all()


def getPublishedCards():
    return getCardsByGroup(GROUP_PUBLISHED)


def getEventCards():
    return getCardsByGroup(GROUP_EVENT)
