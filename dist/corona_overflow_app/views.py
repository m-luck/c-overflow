from django.shortcuts import render
from .models import Submission
from .serializers import SubmissionSerializer
from rest_framework import generics

class SubmissionListCreate(generics.ListCreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

def index(request):
    return render(request, 'frontend/index.html')
