import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Servicio extends BaseModel {
  @column({ isPrimary: true })
  public id_servicio: number

  @column()
  public descripcion: string

  @column()
  public tipo_servicio: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
