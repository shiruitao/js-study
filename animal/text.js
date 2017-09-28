/**
 * 2017-9-21   Shi Ruitao
 */
const _ = require('lodash')

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': true },
    { 'user': 'pebbles', 'active1': true }
  ]; 
console.log(_.findIndex(users, 'active1'));

console.log('-----------fromPairs-----------');
console.log(_.fromPairs([['a', 1], ['b', 2]]));

console.log('-----------head-----------');
console.log(_.head([2, 3, 4]));

console.log('-----------indexOf-----------');
console.log(_.indexOf([3, 1, 4, 6, 2], 3));
console.log(_.indexOf([3, 1, 4, 6, 2, 1], 4, 3));

console.log('-----------intersection-----------');
console.log(_.intersection([2, 1, 3, 4, 5], [2, 3, 4, 6, 5]));

console.log('-----------nth-----------');
var array1 = ['a', 'b', 'c', 'd'];
console.log(_.nth(array1, 3))

console.log('-----------pullAllBy-----------');
var array2 = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'y': 1 }];
_.pullAllBy(array2, [{ 'y': 1 }, { 'x': 3 }], 'x');
console.log(array2);

console.log('-----------pullAllWith-----------');
var array3 = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array3, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array3);

console.log('-----------pullAt-----------');
var array4 = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array4, [1, 3]);
console.log(`array4 -> ${array4}, pulled -> ${pulled}`);

console.log('-----------remove-----------');
var array5 = [1, 2, 3, 4, 5, 6, 7];
var evens = _.remove(array5, function(n) {
  return n % 2 == 0;
});
console.log(array5);
console.log(evens);

console.log('---------setTimeout--------')
function f() {
  setTimeout(function(){console.log('1')}, 0)
}
function fu(){
  console.log(2)
} 
//f();
fu();
console.log('---------slice--------')
var array6 = [1, 2, 3, 4, 5, 6];
console.log(_.slice(array6, 1, 3));

console.log('---------sortedIndex--------')
console.log(_.sortedIndex([1, 2, 3, 5, 6], 4));

console.log('---------sortedIndexBy--------')
var objects = [{ 'x': 4 }, { 'x': 5 }];
console.log(_.sortedIndexBy(objects, { 'x': 5 }, function(o) { return o.x; }));
console.log(_.sortedIndexBy(objects, { 'x': 5 }, 'x'));

console.log('---------sortedLastIndexBy---------')
var objects = [{ 'x': 4 }, { 'x': 5 }];
console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));
console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'));

console.log('---------sorteduniq--------')
console.log(_.sortedUniq([1, 1, 2, 2, 4, 4, 5]));

console.log('---------takeRightWhile--------')
//  Elements are taken until predicate returns falsey
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
console.log(_.takeRightWhile(users, function(o) { return !o.active; }));
console.log('---------------')
console.log(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }));
console.log('---------------')
console.log(_.takeRightWhile(users, ['active', false]));
console.log('---------takeRightWhile--------')
