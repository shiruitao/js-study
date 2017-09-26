/**
 * 2017-9-24   Shi Ruitao
 */
'use strict';
module.exports = app => {
  class Test extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete(param) {
      try {
        yield app.mysql.delete('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(parm) {
      try {
        yield app.mysql.update('user', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }
    * create1(param) {
      try {
        yield app.mysql.insert('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get1(req) {
      let res;
      try {
        res = yield app.mysql.get('student', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete1(param) {
      try {
        yield app.mysql.delete('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update1(parm) {
      try {
        yield app.mysql.update('student', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }

    * create2(param) {
      try {
        yield app.mysql.insert('teacher', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get2(req) {
      let res;
      try {
        res = yield app.mysql.get('teacher', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete2(param) {
      try {
        yield app.mysql.delete('teacher', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update2(parm) {
      try {
        yield app.mysql.update('teacher', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }
    * select2() {
      let res;
      try {
        res = yield app.mysql.select('teacher');
      } catch (e) {
        this.ctx.logger.select(e);
        return false;
      }
      return res;
    }
    * get3() {
      const con = yield app.mysql.beginTransaction();
      try {
        yield con.update('user', { id: 20, age: 300 });
        yield con.insert('user', { name: '王', age: 300 });
        yield con.update('student', { id: 1, score: 30 });
        yield con.delete('student', { id: 2 });
        yield con.insert('student', { score: 121, name: 'man', age: 123 });
        // yield con.delete('student', { name: 'man' });
        yield con.commit();
      } catch (e) {
        yield con.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Test;
};
