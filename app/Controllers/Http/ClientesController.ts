import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente';

export default class ClientesController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return Cliente.findOrFail(params.id);
    } else {
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await Cliente.query().paginate(page, perPage);
      } else {
        return await Cliente.query()
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    const body = request.body();
    const cliente: Cliente = await Cliente.create(body);
    return cliente;
  }

  public async update({ params, request }: HttpContextContract) {
    const cliente: Cliente = await Cliente.findOrFail(params.id);
    const body = request.body();
    cliente.nombres = body.nombres;
    cliente.apellidos = body.apellidos;
    cliente.correo_electronico = body.correo_electronico;
    cliente.direccion = body.direccion;
    cliente.telefono = body.telefono;
    cliente.genero = body.genero;
    cliente.activo = body.activo;
    return cliente.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const cliente: Cliente = await Cliente.findOrFail(params.id);
    response.status(204);
    return cliente.delete();
  }
}
