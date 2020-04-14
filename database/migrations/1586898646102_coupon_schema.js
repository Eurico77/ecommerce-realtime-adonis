'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
  up() {
    this.create('coupons', table => {
      table.increments()
      table.strinh('code', 100).notNullable()
      table.dataTime('valid_from')
      table.dataTime('valid_until')
      tabl.integer('quantity').defaultTo(1)
      table.enu('can_use_for', ['porduct', 'client', 'porduct_client ', 'all'])

      table.enu('type', ['free', 'percent', 'currency']).defaultTo('currency')
      table.boolean('recursive').defaultTo('false')

      table.timestamps()
    })
  }

  down() {
    this.drop('coupons')
  }
}

module.exports = CouponSchema
