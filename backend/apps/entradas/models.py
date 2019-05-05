from django.db import models

# Create your models here.

class Parrafo(models.Model):
    subtitulo = models.CharField(max_length=80, null=True, blank=True)
    parrafo = models.CharField(max_length=800, null=True, blank=True)
    descripcion = models.CharField(max_length=200, null=True, blank=True)
    video = models.FileField(upload_to = 'video/', null=True, blank=True)
    imagen = models.ImageField(upload_to = 'image/', null=True, blank=True)
    youtube = models.BooleanField(default=False)

class Proyecto(models.Model):
    titulo = models.CharField(max_length=100)
    categoria = models.CharField(max_length=80)
    parrafos = models.ManyToManyField("Parrafo")

class Entrada(models.Model):
    titulo = models.CharField(max_length=100)
    categoria = models.CharField(max_length=80)
    parrafos = models.ManyToManyField("Parrafo")

class Glosario(models.Model):
    termino = models.CharField(max_length=30)
    definicion = models.CharField(max_length=300)