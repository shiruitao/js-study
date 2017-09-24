/**
 * 2017-9-24   Shi Ruitao
 */

'use strict';
const _ = require('lodash');
module.exports = app => {
  class Lodash extends app.Service {
    * lodash() {
      return _.intersection([ 2, 1, 3, 4, 5 ], [ 2, 3, 4, 6, 5 ]);
    }
    * git() {
      return yield app.curl('https://github.com');
    }
    * findIndex() {
      const users = [
        { user: 'barney', active: true },
        { user: 'fred', active: true },
        { user: 'pebbles', active1: false }];
      return _.findIndex(users, 'active1');
    }
  }
  return Lodash;
};
