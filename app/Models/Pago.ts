import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pago extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fecha_pago: DateTime

  @column()
  public monto: number

  @column()
  public metodo_pago: string

  @column()
  public descuento: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
