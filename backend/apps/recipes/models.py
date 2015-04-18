from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    directions = models.TextField()
    ingredients = models.ManyToManyField(Ingredient)

    def __str__(self):
        return self.name



# If you want to change the way Django shows a pluralized entity on the admin site:
# class Meta:
#         verbose_name_plural = "Companies"
# (This is nested inside of the model's class that you want to effect)