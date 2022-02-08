from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=50, verbose_name='Наименование категории')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Dish(models.Model):
    dish_name = models.CharField(max_length=128, verbose_name='Наименование блюда')
    how_prepare = models.TextField()
    image = models.ImageField(upload_to='images/%Y/%m/%d', verbose_name='Изображение', blank=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, verbose_name='Категория')

    class Meta:
        verbose_name = 'Блюдо'
        verbose_name_plural = 'Блюда'

