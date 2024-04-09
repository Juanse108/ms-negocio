import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Plan from 'App/Models/Plan';

export default class PlanesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Plan.findOrFail(params.id);
        } else {
          
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Plan.query().paginate(page, perPage);
          } else {
            return await Plan.query()
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.body();
        const plan: Plan = await Plan.create(body);
        return plan;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const plan: Plan = await Plan.findOrFail(params.id);
        const body = request.body();
        plan.nombre = body.nombre;
        plan.descripcion = body.descripcion;
        plan.precio = body.precio;
        plan.beneficiarios = body.beneficiarios;
        return plan.save();
      }
    
      public async delete({ params, response }: HttpContextContract) {
        const plan: Plan = await Plan.findOrFail(params.id);
        response.status(204);
        return plan.delete();
      }
}