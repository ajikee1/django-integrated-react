from django.shortcuts import render
from django.http import HttpResponse

def renderPieChart(request):
    return render(request, 'pieChart.html')
