import requests

from django.conf import settings
from django.core.cache.backends.base import DEFAULT_TIMEOUT
from django.views.decorators.cache import cache_page
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render

CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)


@cache_page(CACHE_TTL)
@api_view()
def example_channel(request):
    response = requests.get('http://api.thingspeak.com/channels/9/feed.json')
    return Response(response.json())
