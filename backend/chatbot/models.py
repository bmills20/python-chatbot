from django.db import models

# Create your models here.

class chatbot(models.Model):
    botname = models.CharField(max_length=120)
    message = models.TextField()

    def _str_(self):
        return self.botname