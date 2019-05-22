from rest_framework import routers
from django.conf.urls import url
from .viewsets import EntradaViewSet, EntradaParrafoWriteViewSet, ParrafoViewSet, ParrafoEditViewSet, ParrafoVistaViewSet, GlosarioViewSet, GlosarioWriteViewSet, GeneralViewSet, GeneralTodoViewSet

#Rutas
router = routers.SimpleRouter()
router.register('entradas', EntradaViewSet)
router.register('entradawrite', EntradaParrafoWriteViewSet)
router.register('parrafos', ParrafoViewSet)
router.register('parrafoedit', ParrafoEditViewSet)
router.register('parrafovista', ParrafoVistaViewSet)
router.register('glosario', GlosarioViewSet)
router.register('glosariowrite', GlosarioWriteViewSet)
router.register('general', GeneralTodoViewSet)

urlpatterns = [
    url(r'^general/(?P<reftipo>\d+)/(?P<refcat>\d+)/$', GeneralViewSet.as_view({'get': 'list'})),
    url(r'^parrafos/(?P<refentrada>\d+)/$', ParrafoViewSet.as_view({'get': 'list'})),
    url(r'^parrafovista/(?P<refentrada>\d+)/$', ParrafoVistaViewSet.as_view({'get': 'list'})),
    url(r'^glosario/(?P<refentrada>\d+)/$', GlosarioViewSet.as_view({'get': 'list'})),
] + router.urls