from django.contrib import admin
from .models import chatbot

class ChatbotAdmin(admin.ModelAdmin):
    list_display = ('id', 'botname', 'message')

# Register your models here.
admin.site.register(chatbot, ChatbotAdmin)