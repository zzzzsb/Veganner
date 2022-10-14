from email.headerregistry import Address, Group
import re
import jwt
from rest_framework import status
from django.conf import settings
from django.db.models import Count, Subquery, OuterRef
from .serializers import PostSerializer, CommentsItemSerializer, LikeSerializer
from accounts.models import User
from .models import Posts, Like, Comments
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.paginator import Paginator
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))


# @api_view(['GET'])
# def PostAllGetAPI(request):
#     item = Posts.objects.all().values('Title')
#     # serializer = PostListSerializer(item)
#     return Response(item)


class PostAllGetAPI(APIView):
    model = Posts

    def get(self, request):
        # Sort = (request.GET["Sort"])
        # if Sort == None:
        #     Sort = "CreationTime"
        print(request.GET.keys())
        # filter_set = {
        #     User: User, Title: Title, Content: Content, Type: Type,
        #     Hashtag: Hashtag, Groups: Groups, Sort: Sort, Address: Address
        # }
        items = Posts.objects
        # test_data_set = Like.objects.values(
        #     "PostId_id").annotate(Count('Like')).values("PostId_id", "Like__count")
        # print(queryset.query)
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
            items = items.filter(User__contains=set_Data)
        elif "Sort" in keys:
            Sort = request.GET["Sort"]
        elif "Page" in keys:
            Page = request.GET["Page"]

        # test_data = items.annotate(PostId_id=Subquery(
        #     test_data_set)).values()

        items = items.values("ID", "Type", "Title", "Thumbnail",
                             "CreationTime", "User").order_by(Sort)
        # print(type(items))
        # print(type(test_data_set))

        # print(test_data)
        paginator = Paginator(items, 10)
        responseData = paginator.get_page(Page)

        # print(items)
        # items = Posts.objects.filter().values("ID", "Type", "Title", "Thumbnail",
        #                                       "CreationTime", "User").order_by("CreationTime")
        # print(items.query)
        # test_data = Posts.objects.select_related(queryset)
        # print(test_data)
        return Response(responseData.object_list)
        # return Response(test_data)

    def post(self, request):
        # user = User.objects.get(email=request.user).id
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
        serializer = PostSerializer(item)
        return Response(serializer.data)

    def put(self, request, ID):
        item = Posts.objects.get(ID=ID)
        data = request.data.copy()
        data["User"] = request.user
        serializer = PostSerializer(item, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, ID):
        item = Like.objects.get(PostId=ID, User=request.user)

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
