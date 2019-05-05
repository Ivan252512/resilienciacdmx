from rest_framework import serializers
from .models import Parrafo, Proyecto, Entrada, Glosario

class ParrafoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parrafo
        fields = '__all__'

class ProyectoSerializer(serializers.ModelSerializer):
    parrafos = ParrafoSerializer(many=True)

    class Meta:
        model = Proyecto
        fields = '__all__'

class EntradaSerializer(serializers.ModelSerializer):
    parrafos = ParrafoSerializer(many=True)

    class Meta:
        model = Entrada
        fields = '__all__'

class GlosarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Glosario
        fields = '__all__'

