from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

# Создаем роутер
router = DefaultRouter()

# Регистрируем ViewSets
router.register('categories', CategoryViewSet)  # URL: /api/categories/
router.register('products', ProductViewSet)     # URL: /api/products/

urlpatterns = [
    path('', include(router.urls)),  # Все маршруты роутера
]