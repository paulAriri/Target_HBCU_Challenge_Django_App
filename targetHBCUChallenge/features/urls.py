from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="home"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.register, name="register"),
    path('trivia/', views.trivia, name="trivia"),
    path('budget/', views.budget, name="budget"),
    path('budgetlist1/', views.budgetlist1, name="budget_list_one"),
    path('budgetlist2/', views.budgetlist2, name="budget_list_two"),
    path('budgetlist3/', views.budgetlist3, name="budget_list_three"),
    path('triviarules/', views.trivia_rules, name="trivia_rules"),
]