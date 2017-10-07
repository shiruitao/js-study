/**
 * 2017-9-7   Shi Ruitao
 */

'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {

    const User = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (User.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.bit('bit', 63);
        table.float('float', 5, 2).notNullable().defaultTo(0.0);
        table.bigInteger('mobile').notNullable().defaultTo(0);
        table.boolean('bool').notNullable().defaultTo(0);
        table.decimal('decimal').defaultTo();
        table.binary('binary');
        table.date('data');
        table.dateTime('datetime', 3).defaultTo(knex.fn.now());
        table.time('time', 3);
        table.enum('enum', [ 1, 2, 3 ]).defaultTo('1');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      // yield ctx.helper.unique(app, 'student', 'name');
    }
  });
};
