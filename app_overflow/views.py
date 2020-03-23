from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, status

from .models import Submission, SubmissionBackup
from .serializers import *

class SubmissionListCreate(generics.ListCreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

class SubmissionBackupListCreate(generics.ListCreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
