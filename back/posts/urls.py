from posts.views import PostAllGetAPI, PostGetAPI, PostLikeAPI
from django.urls import path, include, re_path
from django.urls import include
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path(r'', PostAllGetAPI.as_view(), name="board"),
    path('<int:ID>/', PostGetAPI.as_view(), name="details"),
    path('<int:ID>/like', PostLikeAPI.as_view(), name="details"),



]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
