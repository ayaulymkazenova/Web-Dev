from rest_framework import mixins, generics
from ..models import Product
from ..serializers import ProductSerializer


class ProductListAPIView(mixins.ListModelMixin,
                          mixins.CreateModelMixin,
                          generics.GenericAPIView):
    """
    GET: /api/mixins/products/ - список всех товаров
    POST: /api/mixins/products/ - создать новый товар
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetailAPIView(mixins.RetrieveModelMixin,
                            mixins.UpdateModelMixin,
                            mixins.DestroyModelMixin,
                            generics.GenericAPIView):
    """
    GET: /api/mixins/products/<id>/ - получить товар
    PUT: /api/mixins/products/<id>/ - обновить товар
    DELETE: /api/mixins/products/<id>/ - удалить товар
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)