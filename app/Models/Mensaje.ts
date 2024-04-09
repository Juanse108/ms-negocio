import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Mensaje extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contenido: string

  @column()
  public fecha_envio: DateTime

  @column()
  public leido: boolean


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}