from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

# Create your views here.
from .forms import CreateUserForm
from django.contrib.auth.decorators import login_required

@login_required(login_url="login")
def home(request):
    return render(request, 'features/home.html')

def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username or Password is incorrect')

    context = {}
    return render(request, 'features/login.html', context)

def logoutUser(request):
    logout(request)

    return redirect('login')

def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()

        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid:
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'Account was created for ' + user)

                return redirect('login')

    context = {'form':form}
    return render(request, 'features/register.html', context)

@login_required(login_url="login")
def trivia_rules(request):
    return render(request, 'features/trivia_rules.html')

@login_required(login_url="login")
def budgetlist1(request):
    return render(request, 'features/budgetlist.html')

@login_required(login_url="login")
def budgetlist2(request):
    return render(request, 'features/budgetlist2.html')

@login_required(login_url="login")
def budgetlist3(request):
    return render(request, 'features/budgetlist3.html')

@login_required(login_url="login")
def trivia(request):
    return render(request, 'features/trivia.html')

@login_required(login_url="login")
def budget(request):
    return render(request, 'features/budget.html')