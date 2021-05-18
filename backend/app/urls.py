from django.urls import path
import app.views as views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('post1/', views.Leaf_Disease, name = 'post1')
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)