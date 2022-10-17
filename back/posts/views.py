import re
import jwt
from rest_framework import status
from django.conf import settings
from django.db.models import Count, Subquery, OuterRef
from .serializers import PostSerializer, CommentsItemSerializer, LikeSerializer, ImageSerializer
from accounts.models import User
from .models import Image, Posts, Like, Comments
from rest_framework.response import Response
from rest_framework.views import APIView
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))


class PostAllGetAPI(APIView):
    model = Posts

    def get(self, request):
        items = Posts.objects
        Page = 1
        Sort = "CreationTime"
        keys = request.GET.keys()
        if "ID" in keys:
            set_Data = request.GET["ID"]
            items = items.filter(ID=set_Data)
        elif "Group" in keys:
            set_Data = request.GET["Group"]
            items = items.filter(Group__contains=set_Data)
        elif "Content" in keys:
            set_Data = request.GET["Content"]
            items = items.filter(Content__contains=set_Data)
        elif "Address" in keys:
            set_Data = request.GET["Address"]
            items = items.filter(Address__contains=set_Data)
        elif "Type" in keys:
            set_Data = request.GET["Type"]
            items = items.filter(Type__contains=set_Data)
        elif "Hashtag" in keys:
            set_Data = request.GET["Hashtag"]
            items = items.filter(Hashtag__contains=set_Data)
        elif "Title" in keys:
            set_Data = request.GET["Title"]
            items = items.filter(Title__contains=set_Data)
        elif "User" in keys:
            set_Data = request.GET["User"]
            items = items.filter(User=set_Data)
        elif "Sort" in keys:
            Sort = request.GET["Sort"]
        elif "Page" in keys:
            Page = request.GET["Page"]
        items = items.values("ID", "Type", "Title", "Thumbnail",
                             "CreationTime", "User").order_by(Sort)
        paginator = Paginator(items, 10)
        responseData = list(paginator.get_page(Page).object_list)

        test_data_p = [responseData[i]["ID"] for i in range(len(responseData))]
        test_data_set = Like.objects.values(
            "PostId_id").annotate(Count('Like')).values("PostId_id", "Like__count").filter(PostId_id__in=test_data_p)

        test_data_l = [test_data_set[i]["PostId_id"]
                       for i in range(len(test_data_set))]

        for i in range(len(test_data_p)):
            if test_data_p[i] in test_data_l:
                index_l = test_data_l.index(test_data_p[i])
                responseData[i]["Likes"] = test_data_set[index_l]["Like__count"]
            else:
                responseData[i]["Likes"] = 0

        return Response(responseData)

    def post(self, request):
        user = request.user
        data = request.data.copy()
        data["User"] = user
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostGetAPI(APIView):
    def get(self, request, ID):
        item = Posts.objects.get(ID=ID)
        responseData = PostSerializer(item)
        return Response(responseData.data)

    def put(self, request, ID):
        item = Posts.objects.get(ID=ID)
        data = request.data.copy()
        data["User"] = request.user
        serializer = PostSerializer(item, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ID):
        item = Posts.objects.get(ID=ID)
        if item.User != request.user:
            return Response("본인 게시글이 아닙니다")
        item.delete()
        return Response("deleted:"+str(ID))


class PostCommentsAPI(APIView):

    def get(self, request, ID):
        item = Comments.objects.filter(PostId=ID).values()

        return Response(item)

    def post(self, request, ID):
        data = request.data.copy()
        data["User"] = request.user
        data["PostId"] = ID
        serializer = CommentsItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ID, ):
        item = Comments.objects.get(CommentId=request.GET["CommentId"])
        if item.User != request.user:
            return Response("본인 게시글이 아닙니다")
        item.delete()
        return Response("deleted:"+str(ID))


class PostLikeAPI(APIView):
    def post(self, request, ID):
        try:
            item = Like.objects.get(PostId=ID, User=request.user)
            item.delete()
            return Response(Like.objects.filter(PostId=ID).count())
        except Like.DoesNotExist:
            serializer = LikeSerializer(
                data={"PostId": ID, "User": request.user, "Like": True})
            if serializer.is_valid():
                serializer.save()
                return Response(Like.objects.filter(PostId=ID).count())
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageApi(APIView):
    def post(self, request):
        data = request.data.copy()
        data["User"] = request.user
        serializer = ImageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
