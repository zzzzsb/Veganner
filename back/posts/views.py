import jwt
from rest_framework import status
from django.conf import settings
from .serializers import PostSerializer, CommentsItemSerializer
from accounts.models import User
from .models import Posts, Like
from rest_framework.response import Response
from rest_framework.views import APIView
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

    def get(self, request, User=None, Title=None, Content=None, Type=None,
            Hashtag=None, Groups=None, Sort="CreationTime", Address=None, page=1):
        print(Sort)
        # filter_set = {
        #     User: User, Title: Title, Content: Content, Type: Type,
        #     Hashtag: Hashtag, Groups: Groups, Sort: Sort, Address: Address
        # }
        items = Posts.objects.filter().values(
            "ID", "Type", "Title", "Thumbnail", "CreationTime", "User").order_by(Sort)
        print(items.query)
        return Response(items)

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
        # jwt_Data = jwt.decode(request.cookies.get(''))
        serializer = PostSerializer(item)
        # print(self.request.user)
        return Response(serializer.data)

    def delete(self, request, ID):
        item = Posts.objects.get(ID=ID)
        if item.User != request.user:
            return Response("본인 게시글이 아닙니다")
        item.delete()
        return Response("deleted:"+str(ID))


class PostLikeAPI(APIView):
    def post(self, request, ID):
        try:
            item = Like.objects.get(PostId=ID, User=request.user)
            item.delete()
        except Like.DoesNotExist:
            serializer = PostSerializer(
                {"PostId": ID, User: request.user, "Like": True})
            serializer.save()
        return Response(Like.objects.filter(PostId=ID).count())
