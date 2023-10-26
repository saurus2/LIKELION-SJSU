from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Users(models.Model):
    income = models.IntegerField(verbose_name= 'Income')
    savings = models.IntegerField(verbose_name= 'Savings', default=0, blank = True)
    remaining = models.IntegerField(verbose_name= 'Remaining Income', default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)


class Expenditures(models.Model):

    rent = models.IntegerField(verbose_name= 'Rent', default=0, blank = True)
    leisure = models.IntegerField(verbose_name= 'Leisure', default=0, blank = True)
    grocery = models.IntegerField(verbose_name= 'Grocery', default=0, blank = True)
    others = models.IntegerField(verbose_name= 'Others', default=0, blank = True)
    month = models.IntegerField(verbose_name= 'Month', default=0, blank = True)
    year = models.IntegerField(verbose_name= 'Year', default=0, blank = True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

