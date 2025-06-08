from rest_framework import serializers
from .models import Category, Serie

class SerieSerializer(serializers.ModelSerializer):
    """Serializer simple para el modelo Serie"""
    class Meta:
        model = Serie
        fields = ['id', 'cod', 'nom', 'cat', 'img']


class SerieDetailSerializer(serializers.ModelSerializer):
    """Serializer detallado de Serie (por si quieres expandir más adelante)"""
    category_name = serializers.CharField(source='cat.nombre', read_only=True)

    class Meta:
        model = Serie
        fields = ['id', 'cod', 'nom', 'category_name', 'img']


class CategorySerializer(serializers.ModelSerializer):
    """Serializer simple para Category"""
    class Meta:
        model = Category
        fields = ['id', 'nombre']


class CategoryDetailSerializer(serializers.ModelSerializer):
    """Serializer detallado con series anidadas"""
    series = SerieSerializer(many=True, read_only=True, source='series')  

    class Meta:
        model = Category
        fields = ['id', 'nombre', 'series']
