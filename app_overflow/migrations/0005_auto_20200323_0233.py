# Generated by Django 3.0.4 on 2020-03-23 02:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_overflow', '0004_auto_20200323_0213'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submission',
            name='comment',
            field=models.TextField(max_length=65536),
        ),
    ]
