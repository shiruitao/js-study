/**
 * 2017-9-28   Shi Ruitao
 */
'use strict';

const knex = require('knex')({
  client: 'mysql',
});
const b = 3;
module.exports = app => {
  class User extends app.Service {
    * register(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * login(parm) {
      try {
        yield app.mysql.get('user', parm);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * mobileSet(req) {
      try {
        const a = knex('user').insert({ mobile: req });
        yield app.mysql.query(a.toString());
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * mobileModify(parm) {
      try {
        const a = knex('user').update({ mobile: parm });
        yield app.mysql.query(a.toString());
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }
    * vote(id) {
      const a = yield this.app.mysql.select('user', {
        where: { id },
        columns: 'votes',
      });
      if (a < b) {
        try {
          yield app.mysql.update('user', {
            votes: a - 1,
          });
        } catch (e) {
          return false;
        }
      }
      return true;
    }
  }
  return User;
};
