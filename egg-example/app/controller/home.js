/**
 * 2017-9-24   Shi Ruitao
 */

'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const a = this.ctx.helper.foo(this.ctx.request.query.c, this.ctx.request.query.d);
      const b = this.ctx.helper.con(this.ctx.request.query.e);
      this.ctx.body = a + b;
    }
    * time() {
      this.ctx.body = yield this.service.home.time();
    }
    * index1() {
      const c = 'home index1 ';
      const d = 'hello sina';
      this.ctx.body = c + d;
    }
    * sina() {
      const r = yield this.service.home.sina();
      this.ctx.body = r;
    }
    * sohu() {
      const a = yield this.service.home.sohu();
      this.ctx.body = a;
    }
    * baidu() {
      const g = yield this.service.home.baidu();
      this.ctx.body = g;
    }
    * test() {
      const c = yield this.service.test.test();
      const d = yield this.service.home.test();
      this.ctx.body = c + d;
    }
    * lodash() {
      const f = yield this.service.lodash.lodash();
      this.ctx.body = f;
    }
    * taobao() {
      this.ctx.body = yield this.service.home.taobao();
    }
    * git() {
      const i = yield this.service.lodash.git();
      this.ctx.body = i.data;
    }
    * findIndex() {
      this.ctx.body = yield this.service.lodash.findIndex();
    }
    * home(ctx) {
      const result = yield ctx.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
        timeout: 3000,
      });
      ctx.body = {
        status: result.status,
        headers: result.headers,
        package: result.data,
      };
    }
  }
  return HomeController;
};
