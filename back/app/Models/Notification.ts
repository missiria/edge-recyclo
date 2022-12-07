import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { BaseModel, column, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public note: string

  @column()
  public type: string

  @hasOne(() => User, {
    localKey: 'id'
  })
  @column({})
  public user_id: HasOne<typeof User>

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public users: HasMany<typeof User>
}
