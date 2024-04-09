import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mensaje from 'App/Models/Mensaje';

export default class MensajesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Mensaje.findOrFail(params.id);
        } else {
          
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Mensaje.query().paginate(page, perPage);
          } else {
            return await Mensaje.query()
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.body();
        const mensaje: Mensaje = await Mensaje.create(body);
        return mensaje;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const mensaje: Mensaje = await Mensaje.findOrFail(params.id);
        const body = request.body();
        mensaje.contenido = body.contenido;
        mensaje.fecha_envio = body.fecha_envio;
        mensaje.leido = body.leido;
        return mensaje.save();
      }
    
      public async delete({ params, response }: HttpContextContract) {
        const mensaje: Mensaje = await Mensaje.findOrFail(params.id);
        response.status(204);
        return mensaje.delete();
      }
}
