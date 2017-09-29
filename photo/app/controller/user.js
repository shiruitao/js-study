/**
 * 2017-9-29   Shi Ruitao
 */

'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * register() {
      this.ctx.body = yield this.service.user.register();
    }
  }
  return HomeController;
};
