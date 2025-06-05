from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    date = models.CharField(max_length=100)
    venue = models.CharField(max_length=200)
    link = models.URLField()
    image = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
