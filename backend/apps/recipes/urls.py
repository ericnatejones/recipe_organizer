from django.conf.urls import patterns, url
from views import RecipeList

urlpatterns = [
    url('^recipes/$', RecipeList.as_view(), name='recipe-list'),
]