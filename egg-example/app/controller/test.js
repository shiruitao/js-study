/**
 * 2017-9-25  Shi Ruitao
 */
'use strict';
module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.test.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.test.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.test.get(this.ctx.request.body);
    }
    * get3() {
      this.ctx.body = yield this.service.test.get3();
    }
    * update() {
      this.ctx.body = yield this.service.test.update(this.ctx.request.body);
    }

    * create1() {
      this.ctx.body = yield this.service.test.create1(this.ctx.request.body);
    }
    * delete1() {
      this.ctx.body = yield this.service.test.delete1(this.ctx.request.body);
    }
    * get1() {
      this.ctx.body = yield this.service.test.get1(this.ctx.request.body);
    }
    * update1() {
      this.ctx.body = yield this.service.test.update1(this.ctx.request.body);
    }

    * create2() {
      this.ctx.body = yield this.service.test.create2(this.ctx.request.body);
    }
    * delete2() {
      this.ctx.body = yield this.service.test.delete2(this.ctx.request.body);
    }
    * get2() {
      this.ctx.body = yield this.service.test.get2(this.ctx.request.body);
    }
    * update2() {
      this.ctx.body = yield this.service.test.update2(this.ctx.request.body);
    }
    * select2() {
      this.ctx.body = yield this.service.test.select2(this.ctx.request.body);
    }
  }
  return TestController;
};
