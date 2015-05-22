from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
from rest_framework.authtoken.views import *
from views import *

urlpatterns = [
    url('^admin/', include(admin.site.urls)),
    url('^landing/$', RecipeList.as_view(), name='recipe-detail'),
    url('^register-user/$', Registration.as_view(), name='registration'),
    url('^obtain-auth-token/', obtain_auth_token),
    url('^get-user-info/', GetUserInfo.as_view(), name='get-user-info'),
    url('^recipes/$', RecipeList.as_view(), name='recipe-list'),
    url('^recipes/(?P<pk>[0-9]+)/$', RecipeDetail.as_view(), name='recipe-detail'),
    url('^add-recipe/$', AddRecipe.as_view(), name='recipe-detail'),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
]
