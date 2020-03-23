from rest_framework import serializers
from .models import Submission, SubmissionBackup

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

class SubmissionBackupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubmissionBackup
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
