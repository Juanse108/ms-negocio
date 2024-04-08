import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/comentario_calificaciones', 'ComentarioCalificacionesController.find');
  Route.get('/comentario_calificaciones/:id', 'ComentarioCalificacionesController.find');
  Route.post('/comentario_calificaciones', 'ComentarioCalificacionesController.create');
  Route.put('/comentario_calificaciones/:id', 'ComentarioCalificacionesController.update');
  Route.delete('/comentario_calificaciones/:id', 'ComentarioCalificacionesController.delete');
})

