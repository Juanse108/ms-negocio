import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServicioPlan from 'App/Models/ServicioPlan';

export default class ServicioPlanController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return ServicioPlan.findOrFail(params.id);
    } else {
      
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await ServicioPlan.query().paginate(page, perPage);
      } else {
        return await ServicioPlan.query()
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    const body = request.body();
    const servicioPlan: ServicioPlan = await ServicioPlan.create(body);
    return servicioPlan;
  }

  public async update({ params, request }: HttpContextContract) {
    const servicioPlan: ServicioPlan = await ServicioPlan.findOrFail(params.id);
    const body = request.body();
    servicioPlan.id_servicio = body.id_servicio;
    servicioPlan.id_plan = body.id_plan;
    return servicioPlan.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const servicioPlan: ServicioPlan = await ServicioPlan.findOrFail(params.id);
    response.status(204);
    return servicioPlan.delete();
  }
}
