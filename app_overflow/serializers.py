from rest_framework import serializers
from .models import Submission

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = (
            'belief',
            'breathing',
            'comment',
            'coughing',
            'created_at',
            'email',
            'fatigue',
            'fever',
            'headache',
            'id',
            'ip_address',
            'nose',
            'throat',
            'visits',
            'worry',
        )
