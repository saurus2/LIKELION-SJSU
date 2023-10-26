from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Users, Expenditures
from django.contrib.auth import get_user_model

# Create your views here.
def planner_view(request):
    users = get_all_users()
    for i in users:
        print(f'users: {i.username}\npassword: {i.password}')
    return render(request, "planner.html")

def home_view(request):
    if request.method == 'GET':
        return render(request, 'home.html', {'form':AuthenticationForm})
    else:
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            login(request, form.user_cache)
            return render(request, 'menu.html', {'form':form})

        else:
            return render(request, 'home.html', {'form':form})

def get_all_users():
    all_users = User.objects.all()
    return all_users


@login_required
def userInput_view(request):
    if request.user.is_authenticated:
        print("authenticate")
    else:
        print("Not HAPPENING")

    if request.method == 'GET':
        return render(request, 'userInput.html')
    else:
        income = request.POST.get('income')
        savings = request.POST.get('savings')
        rent = request.POST.get('rent')
        leisure = request.POST.get('leisure')
        grocery = request.POST.get('grocery')
        others = request.POST.get('others')
        Users.objects.create(
            income = income,
            savings = savings
        )
        Expenditures.objects.create(
            rent = rent,
            leisure = leisure,
            grocery = grocery,
            others = others,
            user = request.user
        )
        return redirect('user_summary')
    
def menu_view(request):
    return render(request, 'menu.html')

def user_summary(request):
    users_data = Users.objects.all()
    expenditures_data = Expenditures.objects.all()
    return render(request, 'summary.html', {'users_data': users_data, 'expenditures_data' : expenditures_data})
#     user_id = request.user.id
#     user_summary_sa = Users.objects.all(UserId = user_id)
#     user_summary_ex = Expenditures.objects.all(UserId = user_id)
#     merged_data = list(user_summary_sa) + list(user_summary_ex)
#     return render(request, 'summary.html', {'merged_data': merged_data})

# def user_list(request):
#     users = User.objects.all()
#     user = User.objects.get(username='example_user')
#     user_profile = UserProfile.objects.get(user=user)
#     income = user_profile.income
#     return render(request, 'user_list.html', {'users': users})

# @login_required
# def display_income(request):
#     user = request.user
#     users = Users.objects.get(user=user)
#     income = Users.income
#     return render(request, 'display_income.html', {'income': income})    

# @login_required
# def submit_input(request):
#     if request.method == 'GET':
#         pass
#     else:
#         income = request.POST.get('income')
#         savings = request.POST.get('savings')
#         rent = request.POST.get('rent')
#         leisure = request.POST.get('leisure')
#         grocery = request.POST.get('grocery')
#         others = request.POST.get('others')
#         Users.objects.create(
#             income = income,
#             savings = savings
#         )
#         Expenditures.objects.create(
#             rent = rent,
#             leisure = leisure,
#             grocery = grocery,
#             others = others
#             #user = request.user
#         )
#         return redirect('summary')

# def summary_view(request):
#     users_data = Users.objects.all()
#     expenditures_data = Expenditures.objects.all()
#     return render(request, 'summary.html', {'users_data': users_data, 'expenditures_data' : expenditures_data})
    


