'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponUserSchema extends Schema {
  up() {
    this.create('coupon_users', table => {
      table.increments()
      table.integer('coupon_id').usigned()
      table.integer('user_id').usigned()

      table.timestamps()

      table
        .foreign('coupon_id')
        .references('id')
        .inTable('coupons')
        .onDelete('cascade')
    })

    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
  }

  down() {
    this.drop('coupon_users')
  }
}

module.exports = CouponUserSchema
