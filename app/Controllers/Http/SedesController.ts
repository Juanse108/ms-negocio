import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sede from 'App/Models/Sede';

export default class SedesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Sede.findOrFail(params.id);
        } else {
          
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Sede.query().paginate(page, perPage);
          } else {
            return await Sede.query()
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.body();
        const sede: Sede = await Sede.create(body);
        return sede;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const sede: Sede = await Sede.findOrFail(params.id);
        const body = request.body();
        sede.id_sede_funeraria = body.id_sede_funeraria;
        sede.direccion = body.direccion;
        sede.ciudad = body.ciudad;
        sede.departamento = body.departamento;
        sede.telefono = body.telefono;
        sede.numero_salas = body.numero_salas;
        sede.horario_atencion = body.horario_atencion
        return sede.save();
      }
    
      public async delete({ params, response }: HttpContextContract) {
        const sede: Sede = await Sede.findOrFail(params.id);
        response.status(204);
        return sede.delete();
      }
}
