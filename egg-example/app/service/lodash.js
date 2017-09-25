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
    * sortedIndexOf() {
      return _.sortedIndexOf([ 4, 5, 6, 5, 4, 5, 7, 8, 9 ], 5);
    }
    * sortedLastIndex() {
      return _.sortedLastIndex([ 4, 5, 5, 5, 6 ], 5);
    }
  }
  return Lodash;
};
