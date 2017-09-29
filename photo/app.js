/**
 * 2017-9-28 Shi Ruitao
 */

'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        // table.string('name').notNullable();
        table.string('WeChat').notNullable();
        table.integer('votes').notNullable().defaultTo(0);
        table.integer('type').notNullable().defaultTo(0);
        table.integer('mobile').notNullable();
        table.string('address').notNullable();
        table.string('production').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', [ 'phone number', 'WeChat', 'phone modle' ]);
    }

    const photo = yield app.mysql.query(knex.schema.hasTable('photo').toString());
    if (photo.length === 0) {
      const userPhoto = knex.schema.createTableIfNotExists('photo', function(table) {
        table.increments();
        table.integer('status').notNullable().defaultTo(0);
        table.string('modle').notNullable().defaultTo('');
        table.integer('count').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
      });
      yield app.mysql.query(userPhoto.toString());
    }
  });
};

