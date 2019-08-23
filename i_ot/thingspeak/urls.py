from django.urls import path
from . import views

urlpatterns = [
    path('', views.example_channel, name='example_channel'),
]