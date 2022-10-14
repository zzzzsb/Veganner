from rest_framework import serializers
from .models import Posts, Comments, Like


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("User", 'Title', 'Content', 'Thumbnail', 'Type',
                  'Hashtag', 'Groups', 'RestaurantsId', 'Address')


# class PostListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Posts
#         fields = ('ID', 'Title', 'Content', 'Thumbnail', 'Type',
#                   'Hashtag', 'Groups', 'RestaurantsId', 'Address')


class CommentsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('CommentId', 'User', 'PostId')  # 변환 원하는 컬럼들


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('PostId', 'User', 'Like')  # 변환 원하는 컬럼들
