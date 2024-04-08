import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ComentarioCalificacion from 'App/Models/ComentarioCalificacion';

export default class ComentarioCalificacionController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return ComentarioCalificacion.findOrFail(params.id);
    } else {
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await ComentarioCalificacion.query().paginate(page, perPage);
      } else {
        return await ComentarioCalificacion.query()
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    const body = request.body();
    const comentarioCalificacion: ComentarioCalificacion = await ComentarioCalificacion.create(body);
    return comentarioCalificacion;
  }

  public async update({ params, request }: HttpContextContract) {
    const comentarioCalificacion: ComentarioCalificacion = await ComentarioCalificacion.findOrFail(params.id);
    const body = request.body();
    comentarioCalificacion.cod_servicio = body.cod_servicio;
    comentarioCalificacion.calificacion = body.calificacion;
    comentarioCalificacion.comentario = body.comentario;
    comentarioCalificacion.fecha = body.fecha;
    return comentarioCalificacion.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const comentarioCalificacion: ComentarioCalificacion = await ComentarioCalificacion.findOrFail(params.id);
    response.status(204);
    return comentarioCalificacion.delete();
  }

}
