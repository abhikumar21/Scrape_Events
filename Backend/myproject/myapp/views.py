from django.http import JsonResponse
from .models import Event

def get_events(request):
    events = Event.objects.all().values()  # Returns a list of dicts
    return JsonResponse(list(events), safe=False)
    