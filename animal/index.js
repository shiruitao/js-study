/**
 * 2017-9-21   Shi Ruitao
 */
const _ = require('lodash')

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': true },
    { 'user': 'pebbles', 'active': true }
  ]; 
console.log(_.findIndex(users, 'active'));

console.log('-----------fromPairs-----------');
console.log(_.fromPairs([['a', 1], ['b', 2]]));

console.log('-----------head-----------');
console.log(_.head([2, 3, 4]));

console.log('-----------indexOf-----------');
console.log(_.indexOf([3, 1, 4, 6, 2], 3));
console.log(_.indexOf([3, 1, 4, 6, 2, 1], 4, 3));

console.log('-----------intersection-----------');
console.log(_.intersection([2, 1, 3, 4, 5], [2, 3, 4, 6, 5]));

var array = ['a', 'b', 'c', 'd'];
console.log(_.nth(array, 3))
