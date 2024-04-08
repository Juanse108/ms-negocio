import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/ejecucion_servicios', 'EjecucionServiciosController.find');
  Route.get('/ejecucion_servicios/:id', 'EjecucionServiciosController.find');
  Route.post('/ejecucion_servicios', 'EjecucionServiciosController.create');
  Route.put('/ejecucion_servicios/:id', 'EjecucionServiciosController.update');
  Route.delete('/ejecucion_servicios/:id', 'EjecucionServiciosController.delete');
})

