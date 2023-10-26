from django import forms
from .models import Users, Expenditures

class UsersForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = "__all__"