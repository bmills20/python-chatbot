from rest_framework import serializers
from .models import chatbot

class ChatbotSerializer(serializers.ModelSerializer):
    class Meta:
        model = chatbot
        fields = ('id', 'botname', 'message')