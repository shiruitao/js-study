/**
 * 2017-9-25   Shi Ruitao
 */

'use strict';
const _ = require('lodash');
module.exports = app => {
  class Lodash extends app.Service {
    * lodash() {
      const sortedIndexOf = yield this.ctx.service.lodash.sortedIndexOf();
      const sortedLastIndex = yield this.ctx.service.lodash.sortedLastIndex();
      this.ctx.body = sortedIndexOf + '   ' + sortedLastIndex;
    }
  }
  return Lodash;
};
