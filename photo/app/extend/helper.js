/**
 * 2017-9-28  Shi Ruitao
 */

'use strict';
const knex = require('knex')({
  client: 'mysql',
});

module.exports = {
  * unique(app, pra, pro) {
    const users = knex.schema.alterTable(pra, function(t) {
      t.unique(pro);
    });
    yield app.mysql.query(users.toString());
  },
};
