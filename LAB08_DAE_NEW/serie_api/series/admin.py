from django.contrib import admin
from .models import Serie, Category

# Register your models here.
class SerieInline(admin.TabularInline):
    model = Serie
    extra = 2  

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['nombre']
    search_fields = ['nombre']
    inlines = [SerieInline]

@admin.register(Serie)
class SerieAdmin(admin.ModelAdmin):
    list_display = ['cod', 'nom', 'cat']
    list_filter = ['cat']
    search_fields = ['cod', 'nom']