from django.urls import path
from . import views

urlpatterns = [
    path('', views.index ),
    path('api/submission/', views.SubmissionListCreate.as_view() ),
]
