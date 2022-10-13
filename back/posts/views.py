from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Posts
from .serializers import PostSerializer, CommentsItemSerializer
from django.conf import settings
from rest_framework import status
import jwt


# @api_view(['GET'])
# def PostAllGetAPI(request):
#     item = Posts.objects.all().values('Title')
#     # serializer = PostListSerializer(item)
#     return Response(item)


class PostAllGetAPI(APIView):
    model = Posts

    def get(self, request):
        print(request.auth)
        # item = Posts.objects.all().values('Title')
        item = Posts.objects.all()
        serializer = PostSerializer(item, many=True)
        return Response(serializer.data)

        # jwt_Data = jwt.decode(request.cookies.get(''))
        # print(self.request.user)

    def post(self, request):
        # token = request.COOKIES.get('my-app-auth')
        # user = jwt.decode(token, settings.SECRET_KEY)
        # print(user)
        # data = {**request.data,"":""}
        # data.append
        serializer = PostSerializer(data=request.data)
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
        item.delete()
        return Response("deleted:"+str(ID))
