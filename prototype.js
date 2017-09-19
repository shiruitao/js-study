/**
 * 2017-9-19   Shi Ruitao
 */

console.log(`typeof Function -> ${typeof Function}`);
console.log(`typeof Object -> ${typeof Object}`);
console.log(`typeof Function.prototype -> ${typeof Function.prototype}`);
console.log(`typeof Object.prototype -> ${typeof Object.prototype}`);
console.log(`typeof Object.prototype.__proto__ -> ${typeof Object.prototype.__proto__}`);
console.log(`Function.prototype === Object.prototype -> ${Function.prototype === Object.prototype}`);
console.log(`Function.__proto__ === Object.__proto__ -> ${Function.__proto__ === Object.__proto__}`);
console.log(`Function.__proto__.__proto__ === Object.prototype -> ${Function.__proto__.__proto__ === Object.prototype}`);
console.log(`Function.prototype === Function.proto -> ${Function.prototype === Function.__proto__}`);
console.log(`Function.prototype.__proto__ === Object.prototype.__proto__ -> ${Function.prototype.__proto__ === Object.prototype.__proto__}`);
console.log(`Function.__proto__ === Object.prototype -> ${Function.__proto__ === Object.prototype}` );
console.log(`Function.prototype === Object.__proto__ -> ${Function.prototype === Object.__proto__}`);
console.log(`Function.prototype.__proto__ === Object.prototype -> ${ Function.prototype.__proto__ === Object.prototype}`);
console.log(`Object.prototype.prototype -> ${Object.prototype.prototype}`);
console.log(`Function.prototype === Function.__proto__ -> ${Function.prototype === Function.__proto__}`);
console.log(Object.prototype.__proto__ === null);
console.log(`typeof null -> ${typeof null}`);
console.log(`typeof undefined -> ${typeof undefined}`);
console.log('-------------------------------car-----------------------------------');
var car = function(){

};
console.log(`typeof car.prototype -> ${typeof car.prototype}`);
console.log(`typeof car.prototype.prototype -> ${typeof car.prototype.prototype}`);
console.log(`typeof car.prototype.__proto__ -> ${typeof car.prototype.__proto__}`);
console.log(`typeof car.__proto__ -> ${ typeof car.__proto__ }`)
console.log(`car.__proto__ === Function.prototype -> ${car.__proto__ === Function.prototype}`);
console.log(`car.prototype.__proto__ === Object.prototype -> ${car.prototype.__proto__ === Object.prototype}`);
console.log(`typeof car.__proto__.__proto__ -> ${typeof car.__proto__.__proto__}`)

var han = new car();
console.log(`typeof han -> ${typeof han}`);
console.log(`typeof han.__proto__ -> ${typeof han.__proto__}`);
console.log(`car.prototype === han.__proto__ -> ${car.prototype === han.__proto__}`);
console.log(`typeof han.__proto__.__proto__  -> ${typeof han.__proto__.__proto__ }`)
