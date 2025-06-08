from rest_framework import viewsets
from .models import Category, Serie
from .serializers import (
    CategorySerializer, CategoryDetailSerializer,
    SerieSerializer, SerieDetailSerializer
)


class CategoryViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo Category"""
    queryset = Category.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CategoryDetailSerializer  # incluye las series anidadas
        return CategorySerializer


class SerieViewSet(viewsets.ModelViewSet):
    """ViewSet para el modelo Serie"""
    queryset = Serie.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return SerieDetailSerializer  # ejemplo de detalle extendido (opcional)
        return SerieSerializer
