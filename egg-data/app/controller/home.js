'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.home.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.home.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.home.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.home.update(this.ctx.request.body);
    }
  }
  return HomeController;
};
