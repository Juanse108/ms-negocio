import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EjecucionServicio from 'App/Models/EjecucionServicio';

export default class EjecucionServiciosController {
  public async find({ request, params }: HttpContextContract) {
      if (params.id) {
        return EjecucionServicio.findOrFail(params.id);
      } else {
        const data = request.all();
        if ("page" in data && "per_page" in data) {
          const page = request.input('page', 1);
          const perPage = request.input("per_page", 20);
          return await EjecucionServicio.query().paginate(page, perPage);
        } else {
          return await EjecucionServicio.query()
        }
      }
    }
  
  public async create({ request }: HttpContextContract) {
    const body = request.body();
    const ejecucionServicio: EjecucionServicio = await EjecucionServicio.create(body);
    return ejecucionServicio;
  }

  public async update({ params, request }: HttpContextContract) {
    const ejecucionServicio: EjecucionServicio = await EjecucionServicio.findOrFail(params.id);
    const body = request.body();
    ejecucionServicio.codigo_servicio = body.codigo_servicio;
    ejecucionServicio.id_cliente = body.nombres;
    ejecucionServicio.id_servicio = body.apellidos;
    ejecucionServicio.fecha_inicio = body.correo_electronico;
    ejecucionServicio.fecha_fin = body.direccion;
    return ejecucionServicio.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const ejecucionServicio: EjecucionServicio = await EjecucionServicio.findOrFail(params.id);
    response.status(204);
    return ejecucionServicio.delete();
  } 
}
