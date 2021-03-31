from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.contrib.auth.forms import UserCreationForm
# Create your views here.
def home(request):
    return render(request, 'features/home.html')

def login(request):
    return render(request, 'features/login.html')

def register(request):
    return render(request, 'features/register.html')

def trivia_rules(request):
    return render(request, 'features/trivia_rules.html')

def budgetlist1(request):
    return render(request, 'features/budgetlist.html')

def budgetlist2(request):
    return render(request, 'features/budgetlist2.html')

def budgetlist3(request):
    return render(request, 'features/budgetlist3.html')

def trivia(request):
    return render(request, 'features/trivia.html')

def budget(request):
    return render(request, 'features/budget.html')