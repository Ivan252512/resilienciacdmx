from rest_framework import viewsets
from .models import Entrada, Parrafo, Proyecto, Glosario
from .serializer import EntradaSerializer, ParrafoSerializer, ProyectoSerializer, GlosarioSerializer

class EntradaViewSet(viewsets.ModelViewSet):
    queryset = Entrada.objects.all()
    serializer_class = EntradaSerializer

class ParrafoViewSet(viewsets.ModelViewSet):
    queryset = Parrafo.objects.all()
    serializer_class = ParrafoSerializer

class ProyectoViewSet(viewsets.ModelViewSet):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer

class GlosarioViewSet(viewsets.ModelViewSet):
    queryset =Glosario.objects.all()
    serializer_class = GlosarioSerializer
