import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientesSchema extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_usuario')
      table.string('nombres')
      table.string('apellidos')
      table.string('correo_electronico')
      table.string('direccion')
      table.string('telefono')
      table.string('genero')
      table.boolean('activo').defaultTo(true)
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

