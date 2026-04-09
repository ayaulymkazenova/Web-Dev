from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer


# ========== PRODUCTS ==========

class ProductListAPIView(generics.ListCreateAPIView):
    """
    GET: /api/generics/products/ - список всех товаров
    POST: /api/generics/products/ - создать новый товар
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: /api/generics/products/<id>/ - получить товар
    PUT: /api/generics/products/<id>/ - обновить товар
    DELETE: /api/generics/products/<id>/ - удалить товар
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


# ========== CATEGORIES ==========

class CategoryListAPIView(generics.ListCreateAPIView):
    """
    GET: /api/generics/categories/ - список всех категорий
    POST: /api/generics/categories/ - создать новую категорию
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: /api/generics/categories/<id>/ - получить категорию
    PUT: /api/generics/categories/<id>/ - обновить категорию
    DELETE: /api/generics/categories/<id>/ - удалить категорию
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    """
    GET: /api/generics/categories/<id>/products/ - получить все товары в категории
    """
    def get(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            return Response(
                {'error': 'Category not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)