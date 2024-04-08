import BaseSchema from '@ioc:Adonis/Lucid/Schema'



export default class extends BaseSchema {

  protected tableName = 'servicio_plans'



  public async up() {

    this.schema.createTable(this.tableName, (table) => {

      table.increments('id')

      table.integer('id_servicio')

      table.integer('id_plan')

      table.timestamp('created_at', { useTz: true })

      table.timestamp('updated_at', { useTz: true })

    })

  }



  public async down() {

    this.schema.dropTable(this.tableName)

  }

}