'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const User = yield app.mysql.query(knex.schema.hasTable('goods').toString());
    if (User.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('goods', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('number').notNullable().defaultTo(0);
        table.string('type').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'goods', 'name');
    }

    const tab = yield app.mysql.query(knex.schema.hasTable('customer').toString());
    if (tab.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('customer', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.string('phone').notNullable().defaultTo('');
        table.timestamp('cerate_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'customer', 'name');
    }
  });
};
