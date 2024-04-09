import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pago from 'App/Models/Pago';

export default class PagosController {
    
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Pago.findOrFail(params.id);
        } else {
          
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Pago.query().paginate(page, perPage);
          } else {
            return await Pago.query()
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.body();
        const pago: Pago = await Pago.create(body);
        return pago;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const pago: Pago = await Pago.findOrFail(params.id);
        const body = request.body();
        pago.fecha_pago = body.fecha_pago;
        pago.monto = body.monto;
        pago.metodo_pago = body.metodo_pago;
        pago.descuento = body.descuento;
        return pago.save();
      }
    
      public async delete({ params, response }: HttpContextContract) {
        const pago: Pago = await Pago.findOrFail(params.id);
        response.status(204);
        return pago.delete();
      }   

}
