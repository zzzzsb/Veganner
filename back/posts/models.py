from django.db import models


class Posts(models.Model):
    ID = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=255, blank=True, null=False)
    Content = models.TextField(null=False)
    Thumbnail = models.ImageField(upload_to="./thumbnail", null=True)
    Type = models.CharField(max_length=40, blank=True, null=False)
    Hashtag = models.CharField(max_length=255, blank=True, null=True)
    UserId = models.ForeignKey("accounts.user", on_delete=models.CASCADE)
    Groups = models.IntegerField(null=False)
    RestaurantsId = models.IntegerField(null=True)
    Address = models.CharField(max_length=255, blank=True, null=True)
    CreationTime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Title


class Comments(models.Model):
    CommentId = models.AutoField(primary_key=True)
    # UserId = models.ForeignKey(id, on_delete=models.accounts_user)
    PostId = models.ForeignKey(Posts, on_delete=models.CASCADE)

    def __str__(self):
        return self.CommentId
