# Generated by Django 3.1 on 2020-08-07 13:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Members',
            new_name='Member',
        ),
    ]