/**
 * 2017-9-24   Shi Ruitao
 */
'use strict';

module.exports = app => {
  class Test extends app.Service {
    * test() {
      return 'test ';
    }
  }
  return Test;
};
