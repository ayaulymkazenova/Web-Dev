from django.urls import path
from .views import fbv, cbv, mixins, generics

urlpatterns = [
    # Level 2: FBV
    path('fbv/products/', fbv.products_list, name='fbv-product-list'),
    path('fbv/products/<int:product_id>/', fbv.product_detail, name='fbv-product-detail'),
    
    # Level 3: CBV
    path('cbv/products/', cbv.ProductListAPIView.as_view(), name='cbv-product-list'),
    path('cbv/products/<int:product_id>/', cbv.ProductDetailAPIView.as_view(), name='cbv-product-detail'),
    
    # Level 4: Mixins
    path('mixins/products/', mixins.ProductListAPIView.as_view(), name='mixins-product-list'),
    path('mixins/products/<int:product_id>/', mixins.ProductDetailAPIView.as_view(), name='mixins-product-detail'),
    
    # Level 5: Generics (Products + Categories)
    path('generics/products/', generics.ProductListAPIView.as_view(), name='generics-product-list'),
    path('generics/products/<int:product_id>/', generics.ProductDetailAPIView.as_view(), name='generics-product-detail'),
    path('generics/categories/', generics.CategoryListAPIView.as_view(), name='generics-category-list'),
    path('generics/categories/<int:category_id>/', generics.CategoryDetailAPIView.as_view(), name='generics-category-detail'),
    path('generics/categories/<int:category_id>/products/', generics.CategoryProductsAPIView.as_view(), name='generics-category-products'),
]