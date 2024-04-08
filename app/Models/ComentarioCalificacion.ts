import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ComentarioCalificacion extends BaseModel {
  protected table = 'comentario_calificaciones';

  @column({ isPrimary: true })
  public id: number

  @column()
  public cod_servicio: number

  @column()
  public calificacion: number

  @column()
  public comentario: string

  @column.dateTime()
  public fecha: DateTime
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
