/**
 * 
 */

const carp = require('./carp');
const swallow = require('./swallow');
const shark = require('./shark');
const eagle = require('./eagle');

console.log('-----------4----swallow---------------');
var obj1 = new swallow();
obj1.name = 'swallow';
console.log(Object.entries(obj1));
obj1.fly();
obj1.feature();
obj1.eat();

console.log('-----------4----eagle---------------')
var obj2 = new eagle();
obj2.name = 'eagle';
console.log(Object.entries(obj2));
obj2.fly();
obj2.feature();
obj2.eat();

console.log('-----------4----carp---------------');
var obj3 = new carp();
obj3.name = 'carp';
console.log(Object.entries(obj3));
obj3.swim();
obj3.breath();
obj3.looks();

console.log('-----------4----shark---------------');
var obj4 = new shark();
obj4.name = 'shark';
console.log(Object.entries(obj4));
obj4.swim();
obj4.breath();
obj4.eat();
