from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    path('trivia/', views.trivia),
    path('budget/', views.budget),
]