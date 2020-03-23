from django.db import models

class Submission(models.Model):
    # Logistics
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=128)
    ip_address = models.CharField(max_length=128)

    # Payloads
    belief = models.IntegerField()
    breathing = models.IntegerField()
    comment = models.TextField(max_length=65536)
    coughing = models.IntegerField()
    fatigue = models.IntegerField()
    fever = models.IntegerField()
    headache = models.IntegerField()
    nose = models.IntegerField()
    throat = models.IntegerField()
    visits = models.IntegerField()
    worry = models.IntegerField()

class SubmissionBackup(models.Model):
    # Logistics
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=128)
    ip_address = models.CharField(max_length=128)

    # Payloads
    belief = models.IntegerField()
    breathing = models.IntegerField()
    comment = models.TextField(max_length=65536)
    coughing = models.IntegerField()
    fatigue = models.IntegerField()
    fever = models.IntegerField()
    headache = models.IntegerField()
    nose = models.IntegerField()
    throat = models.IntegerField()
    visits = models.IntegerField()
    worry = models.IntegerField()
