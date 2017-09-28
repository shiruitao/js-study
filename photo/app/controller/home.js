/**
 * 2017-9-28   Shi Ruitao
 */

'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.test.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.test.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.test.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.test.update(this.ctx.request.body);
    }
  }
  return HomeController;
};
