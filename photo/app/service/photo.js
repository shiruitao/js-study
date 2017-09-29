'use strict';
module.exports = app => {
  class Photo extends app.Service {
    // * delete(param) {
    //   try {
    //     yield app.mysql.delete('photo', param);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }
    * upload(req) {
      let res;
      try {
        res = yield app.mysql.insert('photo', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * show() {
      try {
        yield app.mysql.select();
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(param) {
      let res;
      try {
        res = yield app.mysql.select('photo', {
          where: {
            id: param,
          },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Photo;
};
