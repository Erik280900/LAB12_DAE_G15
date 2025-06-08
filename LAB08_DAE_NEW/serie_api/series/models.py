from django.db import models

# Create your models here.
from django.db import models

class Category(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Serie(models.Model):
    cod = models.CharField(max_length=50)
    nom = models.CharField(max_length=100)
    cat = models.ForeignKey(Category, related_name='series', on_delete=models.CASCADE)
    img = models.ImageField(upload_to='series_images/', null=True, blank=True)

    def __str__(self):
        return self.nom
