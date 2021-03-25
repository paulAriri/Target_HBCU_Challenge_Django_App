from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return HttpResponse('Home Page')

def trivia(request):
    return HttpResponse('Trivia Page')

def budget(request):
    return HttpResponse('Budget Page')