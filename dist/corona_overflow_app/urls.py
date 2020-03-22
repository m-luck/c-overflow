from django.urls import path
from . import views

urlpatterns = [
    path('api/submission/', views.SubmissionListCreate.as_view() ),
]
