from xml.sax.handler import property_xml_string
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Posts
from .serializers import PostSerializer, CommentsItemSerializer
from rest_framework import status


# @api_view(['GET'])
# def PostAllGetAPI(request):
#     item = Posts.objects.all().values('Title')
#     # serializer = PostListSerializer(item)
#     return Response(item)


class PostAllGetAPI(APIView):
    model = Posts

    def get(self, request):
        item = Posts.objects.all().values('Title')
        return Response(item)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
