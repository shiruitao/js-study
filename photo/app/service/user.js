/**
 * 2017-9-28   Shi Ruitao
 */
'use strict';

const knex = require('knex')({
  client: 'mysql',
});
const MAX = 3;
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
      if(votes < MAX){
        try {
            yield app.mysql.update('user', {
              votes: votes + 1,
            });
            yield app.mysql.update('photo', {
              count: count + 1,
            });
          } catch (e) {
            this.ctx.logger.error(e);
            return false;
          }
      }
    }
      }
      return true;
    }
  }
  return User;
};
