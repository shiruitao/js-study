/**
 * 2017-10-7   Shi Ruitao
 */
'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  class Test extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get() {
      let b;
      try {
        const a = knex.select().table('student');
        b = yield app.mysql.query(a.toString());
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return b;
    }
    * delete(param) {
      try {
        yield app.mysql.delete('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(parm) {
      try {
        yield app.mysql.update('student', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }
  }
  return Test;
};
