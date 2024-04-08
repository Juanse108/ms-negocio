import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/servicio_planes', 'ServicioPlanesController.find');
  Route.get('/servicio_planes/:id', 'ServicioPlanesController.find');
  Route.post('/servicio_planes', 'ServicioPlanesController.create');
  Route.put('/servicio_planes/:id', 'ServicioPlanesController.update');
  Route.delete('/servicio_planes/:id', 'ServicioPlanesController.delete');
})

