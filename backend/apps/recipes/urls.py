from django.conf.urls import patterns, url
from views import RecipeList, RecipeDetail, AddRecipe

urlpatterns = [
    url('^recipes/$', RecipeList.as_view(), name='recipe-list'),
    url('^recipes/(?P<pk>[0-9]+)/$', RecipeDetail.as_view(), name='recipe-detail'),
    url('^add-recipe/$', AddRecipe.as_view(), name='recipe-detail'),
]