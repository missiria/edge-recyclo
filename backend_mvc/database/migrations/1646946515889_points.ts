import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Points extends BaseSchema {
  protected tableName = 'points'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table
      //   .integer('user_id')
      //   .unsigned()
      //   .references('users.id')
      //   .onDelete('CASCADE')
      table.integer('declaration_id', 255)
      // table
      //   .integer('declaration_id')
      //   .unsigned()
      //   .references('declarations.id')
      //   .onDelete('CASCADE')
      table.float('point', 255)
      table.enum('status', ['VALID', 'PENDING'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
