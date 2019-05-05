from rest_framework import routers
from .viewsets import EntradaViewSet, ProyectoViewSet, GlosarioViewSet, ParrafoViewSet

#Rutas
router = routers.SimpleRouter()
router.register('entradas', EntradaViewSet)
router.register('proyectos', ProyectoViewSet)
router.register('glosario', GlosarioViewSet)
router.register('parrafos', ParrafoViewSet)

urlpatterns = router.urls