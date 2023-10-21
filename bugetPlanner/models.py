from django.db import models
import sqlite3
import pandas as pd

cxn = sqlite3.connect('db.sqlite3')
wb = pd.read_excel('db_expenditure.xlsx')
wb.to_sql(name='Expenditure',con=cxn,if_exists='replace',index=True)
cxn.commit()
cxn.close()

# Create your models here.

'''
class Users(models.Model):
    Income = models.IntegerField(verbose_name= 'Income')
    Savings = models.IntegerField(verbose_name= 'Savings', default=0, blank = True)
    Remaining = models.IntegerField(verbose_name= 'Remaining Income', default=0)


class Login(models.Model):
    UserId = models.ForeignKey(to = "Users", on_delete = models.CASCADE)
    LoginName = models.TextField(verbose_name="Name")
    LoginPassword = models.TextField(verbose_name="Password")

class Expenditures(models.Model):

    rent = models.IntegerField(verbose_name= 'Rent', default=0, blank = True)
    leisure = models.IntegerField(verbose_name= 'Leisure', default=0, blank = True)
    grocery = models.IntegerField(verbose_name= 'Grocery', default=0, blank = True)
    others = models.IntegerField(verbose_name= 'Others', default=0, blank = True)
    month = models.IntegerField(verbose_name= 'Month', default=0, blank = True)
    year = models.IntegerField(verbose_name= 'Year', default=0, blank = True)
    UserId = models.ForeignKey(to = "Users", on_delete = models.CASCADE)
'''
