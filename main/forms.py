from django.forms import ModelForm
from main.models import Product

class UniGoalForm(ModelForm):
    class Meta:
        model = Product
        fields = ["name", "price", "description", "thumbnail", "category", "is_featured"]