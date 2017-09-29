/**
 * 2017-9-29   Shi Ruitao
 */

'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * show() {
      this.ctx.body = yield this.service.photo.select();
    }
  }
  return HomeController;
};
