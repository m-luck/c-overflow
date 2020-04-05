# Generated by Django 3.0.4 on 2020-03-23 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_overflow', '0005_auto_20200323_0233'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubmissionBackup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('email', models.CharField(max_length=128)),
                ('ip_address', models.CharField(max_length=128)),
                ('belief', models.IntegerField()),
                ('breathing', models.IntegerField()),
                ('comment', models.TextField(max_length=65536)),
                ('coughing', models.IntegerField()),
                ('fatigue', models.IntegerField()),
                ('fever', models.IntegerField()),
                ('headache', models.IntegerField()),
                ('nose', models.IntegerField()),
                ('throat', models.IntegerField()),
                ('visits', models.IntegerField()),
                ('worry', models.IntegerField()),
            ],
        ),
        migrations.AlterField(
            model_name='submission',
            name='ip_address',
            field=models.CharField(max_length=128),
        ),
    ]