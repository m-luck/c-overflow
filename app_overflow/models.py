from django.db import models


class Submission(models.Model):
    # Logistics
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField()
    ip_address = models.CharField(max_length=16)

    # Payloads
    belief = models.IntegerField()
    breathing = models.IntegerField()
    comment = models.TextField()
    cough = models.IntegerField()
    fatigue = models.IntegerField()
    fever = models.IntegerField()
    headache = models.IntegerField()
    nose = models.IntegerField()
    throat = models.IntegerField()
    visits = models.IntegerField()
    worry = models.IntegerField()

# def get_client_ip(request):
#     x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
#     if x_forwarded_for:
#         print "returning FORWARDED_FOR"
#         ip = x_forwarded_for.split(',')[-1].strip()
#     elif request.META.get('HTTP_X_REAL_IP'):
#         print "returning REAL_IP"
#         ip = request.META.get('HTTP_X_REAL_IP')
#     else:
#         print "returning REMOTE_ADDR"
#         ip = request.META.get('REMOTE_ADDR')
#     return ip
