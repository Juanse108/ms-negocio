import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala';

export default class SalasController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Sala.findOrFail(params.id);
        } else {
          
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Sala.query().paginate(page, perPage);
          } else {
            return await Sala.query()
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.body();
        const sala: Sala = await Sala.create(body);
        return sala;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const sala: Sala = await Sala.findOrFail(params.id);
        const body = request.body();
        sala.id_sala = body.id_sala;
        sala.capacidad = body.capacidad;
        sala.numero_sillas = body.numero_sillas;
        return sala.save();
      }
    
      public async delete({ params, response }: HttpContextContract) {
        const sala: Sala = await Sala.findOrFail(params.id);
        response.status(204);
        return sala.delete();
      }
}
