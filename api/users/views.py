from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import  csrf_protect, csrf_exempt, ensure_csrf_cookie
import json


# Create your views here.


@ensure_csrf_cookie
# @csrf_exempt
def signup(request):
    print (request.method)
    if request.method == 'GET':
        return HttpResponse("GAUTHAM")
    if request.method == 'POST':
        data = request.body.decode("utf-8")
        data = json.loads(data)
        print (data)
        return JsonResponse({"foo": "FETCHED"}, safe=False)
    return HttpResponse("SIGNUP CALL")
