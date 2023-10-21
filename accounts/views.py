from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
#from users.models import Users

from .forms import UserCreateForm, SignUpForm

def signup_view(request):
    if request.method == 'GET':
        form = SignUpForm
        context = {'form': form}
        return render(request, 'accounts/signup.html', context)
    else:
        form = SignUpForm(request.POST)
        if form.is_valid():
            instance = form.save()
            return redirect('accounts:login')
        else:
            return redirect('accounts:signup')

def login_view(request):
    if request.method == 'GET':
        return render(request, 'accounts/login.html', {'form':AuthenticationForm})
    else:
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            login(request, form.user_cache)
            return redirect('planner')
        else:
            return render(request, 'accounts/login.html', {'form':form})
        
def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
    return redirect('planner')