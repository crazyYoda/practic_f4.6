from django.urls import path
from . import views

urlpatterns = [
    path('api/categories/', views.CategoryListCreate.as_view()),
    path('api/dish/', views.DishListCreate.as_view())
]