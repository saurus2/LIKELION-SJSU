from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from.models import Users, Expenditures

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

def menu_view(request):
    return render(request, 'menu.html')

def user_summary(request):
    user_id = request.user.id
    user_summary_sa = Users.objects.all(UserId = user_id)
    user_summary_ex = Expenditures.objects.all(UserId = user_id)
    merged_data = list(user_summary_sa) + list(user_summary_ex)

    return render(request, 'summary.html', {'merged_data': merged_data})


