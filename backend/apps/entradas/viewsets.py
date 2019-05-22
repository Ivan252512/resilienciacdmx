from __future__ import unicode_literals, print_function
from rest_framework import viewsets, generics
from .models import Entrada, Parrafo, Glosario
from .serializer import EntradaSerializer, EntradaParrafoWriteSerializer, ParrafoSerializer, ParrafoVistaSerializer, GlosarioSerializer, GlosarioWriteSerializer

class EntradaViewSet(viewsets.ModelViewSet):
    queryset = Entrada.objects.all()
    serializer_class = EntradaSerializer

class EntradaParrafoWriteViewSet(viewsets.ModelViewSet):
    queryset = Parrafo.objects.filter(esprincipal=True)
    serializer_class = EntradaParrafoWriteSerializer

class ParrafoViewSet(viewsets.ModelViewSet):
    queryset = Parrafo.objects.all()
    serializer_class = ParrafoSerializer

    def get_queryset(self):
        refentrada = self.request.query_params.get('refentrada')
        if (refentrada!=None):
            return Parrafo.objects.filter(entrada=refentrada)
        return Parrafo.objects.all()

class ParrafoEditViewSet(viewsets.ModelViewSet):
    queryset = Parrafo.objects.all()
    serializer_class = ParrafoSerializer


class ParrafoVistaViewSet(viewsets.ModelViewSet):
    queryset = Parrafo.objects.all()
    serializer_class = ParrafoVistaSerializer

    def get_queryset(self):
        refentrada = self.request.query_params.get('refentrada')
        if (refentrada!=None):
            return Parrafo.objects.filter(entrada=refentrada)
        return Parrafo.objects.all()

class GlosarioViewSet(viewsets.ModelViewSet):
    queryset = Glosario.objects.all()
    serializer_class = GlosarioSerializer

    def get_queryset(self):
        refentrada = self.request.query_params.get('refentrada')
        if (refentrada!=None):
            return Glosario.objects.filter(entrada=refentrada)
        return Glosario.objects.all()


class GlosarioWriteViewSet(viewsets.ModelViewSet):
    queryset = Glosario.objects.all()
    serializer_class = GlosarioWriteSerializer

class GeneralTodoViewSet(viewsets.ModelViewSet):
    queryset = Parrafo.objects.filter(esprincipal=True)
    serializer_class = EntradaParrafoWriteSerializer
    
class GeneralViewSet(viewsets.ModelViewSet):
    queryset = Parrafo.objects.filter(esprincipal=True)
    serializer_class = EntradaParrafoWriteSerializer
    
    def get_queryset(self):
        refcat = self.request.query_params.get('refcat')
        reftipo = self.request.query_params.get('reftipo')
        if (refcat!=reftipo):
            return Parrafo.objects.filter(entrada__categoria=refcat, entrada__tipo=reftipo)
        return Parrafo.objects.all()

