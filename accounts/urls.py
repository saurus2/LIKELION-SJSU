from django.urls import path

from .views import signup_view, login_view, logout_view, menu_view, userInput_view
from bugetPlanner.views import user_summary

app_name = 'accounts'

urlpatterns = [
    path('signup/', signup_view, name= 'signup'),
    path('login/', login_view, name= 'login'),
    path('logout/', logout_view, name= 'logout'),
    path('menu/', menu_view, name= 'menu'),
    path('userInput/', userInput_view, name = 'userInput'),
    path('user/<int:user_id>/', user_summary, name='user_summary'),
]