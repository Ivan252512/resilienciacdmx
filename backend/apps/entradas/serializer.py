from __future__ import unicode_literals, print_function
from rest_framework import serializers
from .models import Parrafo, Entrada, Glosario

class EntradaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entrada
        fields = '__all__'

class EntradaParrafoWriteSerializer(serializers.ModelSerializer):
    entrada = EntradaSerializer()
    class Meta:
        model = Parrafo
        fields = '__all__'
    
    def create(self, validated_data):
        entrada_data = validated_data.pop('entrada')
        entrada = Entrada.objects.create(**entrada_data)
        parrafo = Parrafo.objects.create(entrada=entrada, **validated_data)
        return parrafo

    def update(self, instance, validated_data):
        entrada_data = validated_data.pop('entrada')
        entrada = instance.entrada

        instance.subtitulo = validated_data.get('subtitulo', instance.subtitulo)
        instance.parrafo = validated_data.get('parrafo', instance.parrafo)
        instance.descripcionimagen = validated_data.get('descripcionimagen', instance.descripcionimagen)
        instance.descripcionvideo = validated_data.get('descripcionvideo', instance.descripcionvideo)
        instance.video = validated_data.get('video', instance.video)
        instance.imagen = validated_data.get('imagen', instance.imagen)
        instance.youtube = validated_data.get('youtube', instance.youtube)
        instance.esprincipal = validated_data.get('esprincipal', instance.esprincipal)

        instance.save()

        entrada.titulo = entrada_data.get('titulo', entrada.titulo)
        entrada.categoria = entrada_data.get('categoria', entrada.categoria)
        entrada.tipo = entrada_data.get('tipo', entrada.tipo)
        return instance

class ParrafoSerializer(serializers.ModelSerializer):
    entrada = EntradaSerializer

    class Meta:
        model = Parrafo
        fields = '__all__'

class ParrafoVistaSerializer(serializers.ModelSerializer):
    entrada = EntradaSerializer(read_only=True)

    class Meta:
        model = Parrafo
        fields = '__all__'

class GlosarioSerializer(serializers.ModelSerializer):
    entrada = EntradaSerializer

    class Meta:
        model = Glosario
        fields = '__all__'

class GlosarioWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Glosario
        fields = '__all__'