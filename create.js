/**
 * 2017-9-19  Shi Ruitao 
 */
var person = {
    age: 20
};
person.fun = function(){
    return 1
}
var a = Object.create(person, {
    age: {
        value: 30
    }
});
a.__proto__.sex = 'man'
console.log(a.__proto__);
console.log(a.fun());
a.__proto__.name = 2;
console.log(person.name);

var b = Object.create(person, {});
b.__proto__.name1 = 'abc';
console.log(a.name1);
console.log(b.sex);
console.log(a.age, b.age);



console.log('---------------------Array-----------------------');
var arr = ['a', 'b', 'c'];
console.log(arr.__proto__);
console.log(typeof arr); // object
console.log(`typeof arr.__proto__ -> ${typeof arr.__proto__}`);
console.log(`arr.__proto__ === Object.prototype -> ${arr.__proto__ === Object.prototype}`)
console.log(`arr.__proto__.__proto__ === Object.prototype -> ${arr.__proto__.__proto__ === Object.prototype}`)
console.log(arr.__proto__.__proto__.__proto__ === Object.prototype)
console.log(`arr.__proto__.__proto__.__proto__ === Object.prototype -> ${arr.__proto__.__proto__.__proto__ === Object.prototype}`);
console.log(`typeof Array -> ${typeof Array}`);
console.log(`${ Array.prototype === arr.__proto__ }`)
console.log(`Array.__proto__ === Function.prototype -> ${ Array.__proto__ === Function.prototype }`)
console.log(`Array.prototype -> ${Array.prototype}`)

console.log('--------------------string-----------------------')
var str = 'shi';
console.log(str.__proto__);
console.log(typeof str); // string
console.log(`typeof str -> ${typeof str}`);
console.log(`typeof String -> ${typeof String}`);
console.log( `Function.prototype === String.__proto__ -> ${Function.prototype === String.__proto__}` );
console.log(`str.__proto__ ===Object.prototype -> ${str.__proto__ ===Object.prototype}`);
console.log(`str.__proto__.__proto__ ===Object.prototype -> ${str.__proto__.__proto__ ===Object.prototype}`);
console.log(`String.prototype === str.__proto__ -> ${String.prototype === str.__proto__}`);

console.log('---------------------Number----------------------');
var num = 1;
console.log(num.__proto__);
console.log(`typeof num -> ${typeof num}`);
console.log(`typeof Number -> ${typeof Number}`);
console.log(`Function.prototype === Number.__proto__ -> ${ Function.prototype === Number.__proto__ }`)
console.log(`num.__proto__ === Object.prototype -> ${num.__proto__ === Object.prototype}`);
console.log(`num.__proto__.__proto__ ===Object.prototype -> ${num.__proto__.__proto__ ===Object.prototype}`);
console.log(`Number.prototype === num.__proto__ -> ${Number.prototype === num.__proto__}`)

console.log('---------------------Boolean----------------------');
var boo = true;
console.log(`typeof boo -> ${typeof boo}`);
console.log(`typeof Boolean -> ${typeof Boolean}`);
console.log(`Function.prototype === Boolean.__proto__ -> ${ Function.prototype === Boolean.__proto__ }`)
console.log(`boo.__proto__ === Object.prototype -> ${boo.__proto__ === Object.prototype}`);
console.log(`boo.__proto__.__proto__ ===Object.prototype -> ${boo.__proto__.__proto__ ===Object.prototype}`);
console.log(`Boolean.prototype === num.__proto__ -> ${Boolean.prototype === boo.__proto__}`)
console.log(boo.__proto__);
