from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Posts
from .serializers import PostSerializer, PostListSerializer, CommentsItemSerializer


@api_view(['GET'])
def PostAllGetAPI(request):
    item = Posts.objects.all().values('Title',)
    # serializer = PostListSerializer(item)
    return Response(item)
