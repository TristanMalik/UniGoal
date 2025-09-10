from django.shortcuts import render

def show_main(request):
    context = {
        'applicationName' : 'UniGoal',
        'name': 'Muhammad Tristan Malik Anbiya',
        'class': 'PBP E'
    }

    return render(request, "main.html", context)
