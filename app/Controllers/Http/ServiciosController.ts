import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Servicio from 'App/Models/Servicio';


export default class ServiciosController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Servicio.findOrFail(params.id);
        } else {
          
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Servicio.query().paginate(page, perPage);
          } else {
            return await Servicio.query()
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.body();
        const servicioPlan: Servicio = await Servicio.create(body);
        return servicioPlan;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const servicio: Servicio = await Servicio.findOrFail(params.id);
        const body = request.body();
        servicio.id_servicio = body.id_servicio;
        servicio.descripcion = body.descripcion;
        servicio.tipo_servicio = body.tipo_servicio;
        return servicio.save();
      }
    
      public async delete({ params, response }: HttpContextContract) {
        const servicioPlan: Servicio = await Servicio.findOrFail(params.id);
        response.status(204);
        return servicioPlan.delete();
      }
}
