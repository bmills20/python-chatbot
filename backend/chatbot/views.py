from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ChatbotSerializer
from .models import chatbot

# Create your views here.
class ChatbotView(viewsets.ModelViewSet):
    serializer_class = ChatbotSerializer
    queryset = chatbot.objects.all()