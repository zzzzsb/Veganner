from posts.views import PostAllGetAPI
from django.urls import path, include, re_path
from django.urls import include
urlpatterns = [
    re_path(r'', PostAllGetAPI.as_view(), name="get"),
]
