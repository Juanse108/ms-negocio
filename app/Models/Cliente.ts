import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_usuario: number

  @column()
  public nombres: string

  @column()
  public apellidos: string

  @column()
  public correo_electronico: string

  @column()
  public direccion: string

  @column()
  public telefono: string

  @column()
  public genero: string

  @column()
  public activo: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
