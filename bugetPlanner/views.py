from django.shortcuts import render

# Create your views here.
def planner_view(request):
    return render(request, "planner.html")