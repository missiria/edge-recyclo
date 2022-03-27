import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('email', 255).notNullable().unique()
      table.string('phone', 12).unique()
      table.string('password', 180).notNullable()

      table.integer('user_id', 12)

      table.enum('role', ['ADMIN', 'MODERATOR', 'USER'])
      table.enum('type', ['MENAGE', 'COLLECTOR'])

      table.boolean('is_verified')
      table.boolean('active')

      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
