import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Suscripcion from 'App/Models/Suscripcion';

export default class SuscripcionesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Suscripcion.findOrFail(params.id);
        } else {
          
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Suscripcion.query().paginate(page, perPage);
          } else {
            return await Suscripcion.query()
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.body();
        const suscripcion: Suscripcion = await Suscripcion.create(body);
        return suscripcion;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const suscripcion: Suscripcion = await Suscripcion.findOrFail(params.id);
        const body = request.body();
        suscripcion.fechaInicio = body.fechaInicio;
        suscripcion.fechaFin = body.fechaFin;
        return suscripcion.save();
      }
    
      public async delete({ params, response }: HttpContextContract) {
        const suscripcion: Suscripcion = await Suscripcion.findOrFail(params.id);
        response.status(204);
        return suscripcion.delete();
      }
}
