from django.shortcuts import render
from django.http import HttpResponse

def renderRegistration(request):
    return render(request, 'reg.html')
