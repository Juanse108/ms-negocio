import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EjecucionServicio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public codigo_servicio: number

  @column()
  public id_cliente: number

  @column()
  public id_servicio: number

  
  @column.dateTime()
  public fecha_inicio: DateTime

  @column.dateTime()
  public fecha_fin: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
