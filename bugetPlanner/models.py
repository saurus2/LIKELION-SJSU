from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Users(models.Model):
    Income = models.IntegerField(verbose_name= 'Income')
    Savings = models.IntegerField(verbose_name= 'Savings', default=0, blank = True)
    Remaining = models.IntegerField(verbose_name= 'Remaining Income', default=0)
    UserId = models.ForeignKey(to='auth.User', null=True, blank=True, on_delete=models.CASCADE)


class Expenditures(models.Model):

    rent = models.IntegerField(verbose_name= 'Rent', default=0, blank = True)
    leisure = models.IntegerField(verbose_name= 'Leisure', default=0, blank = True)
    grocery = models.IntegerField(verbose_name= 'Grocery', default=0, blank = True)
    others = models.IntegerField(verbose_name= 'Others', default=0, blank = True)
    month = models.IntegerField(verbose_name= 'Month', default=0, blank = True)
    year = models.IntegerField(verbose_name= 'Year', default=0, blank = True)
    UserId = models.ForeignKey(to='auth.User', null=True, blank=True, on_delete=models.CASCADE)

