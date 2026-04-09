from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Product
from ..serializers import ProductSerializer


class ProductListAPIView(APIView):
    """
    GET: /api/products/ - список всех товаров
    POST: /api/products/ - создать новый товар
    """
    
    def get(self, request):
        """Получить список всех товаров"""
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        """Создать новый товар"""
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):
    """
    GET: /api/products/<id>/ - получить товар по ID
    PUT: /api/products/<id>/ - обновить товар
    DELETE: /api/products/<id>/ - удалить товар
    """
    
    def get_object(self, product_id):
        """Вспомогательный метод: найти товар по ID или вернуть 404"""
        try:
            return Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return None
    
    def get(self, request, product_id):
        """Получить товар по ID"""
        product = self.get_object(product_id)
        if product is None:
            return Response(
                {'error': 'Product not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    
    def put(self, request, product_id):
        """Обновить товар по ID"""
        product = self.get_object(product_id)
        if product is None:
            return Response(
                {'error': 'Product not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, product_id):
        """Удалить товар по ID"""
        product = self.get_object(product_id)
        if product is None:
            return Response(
                {'error': 'Product not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)