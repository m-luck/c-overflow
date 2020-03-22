from rest_framework import serializers
from .models import Submission

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = (
            'breathing',
            'comment',
            'cough',
            'created_at',
            'email',
            'fatigue',
            'fever',
            'id',
            'ip_address',
            'nose',
            'throat',
            'visits',
            'worry',
        )
