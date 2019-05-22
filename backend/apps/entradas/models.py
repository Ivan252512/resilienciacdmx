from django.db import models
from django_mysql.models import EnumField


# Create your models here.

class Parrafo(models.Model):
    subtitulo = models.CharField(max_length=80, null=True, blank=True)
    parrafo = models.CharField(max_length=800, null=True, blank=True)
    video = models.FileField(upload_to = 'video/', null=True, blank=True)
    imagen = models.ImageField(upload_to = 'image/', null=True, blank=True)
    descripcionvideo = models.CharField(max_length=200, null=True, blank=True)
    descripcionimagen = models.CharField(max_length=200, null=True, blank=True)
    youtube = models.BooleanField(default=False)
    esprincipal = models.BooleanField(default=False)
    entrada = models.ForeignKey("Entrada", on_delete=models.CASCADE)

    @property
    def entrada__categoria(self):
        return self.entrada.categoria

    @property
    def entrada__tipo(self):
        return self.entrada.tipo


class Entrada(models.Model):
    titulo = models.CharField(max_length=100)
    categoria = EnumField(choices=['Sismos', 'Caída de Ceniza', 'Inundación', 'Asteroides y Cometas', 'Erupción Volcánica', 'Inestabilidad de Laderas'])
    tipo = EnumField(choices=['Proyectos', 'Educación', 'Reflexión', 'Acción'])

class Glosario(models.Model):
    termino = models.CharField(max_length=30)
    definicion = models.CharField(max_length=300)
    entrada = models.ForeignKey("Entrada", on_delete=models.CASCADE)

    @property
    def entrada__categoria(self):
        return self.entrada.categoria

    @property
    def entrada__tipo(self):
        return self.entrada.tipo

