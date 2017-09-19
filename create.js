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

var arr = ['a', 'b', 'c'];
var str = 'shi';
console.log(typeof arr); // object
console.log(typeof str); // string
console.log('-------comp-------')
console.log(arr.__proto__ === Object.prototype);
console.log(arr.__proto__ === Function.prototype);
console.log(arr.__proto__.prototype);
console.log(arr.__proto__.constructer);
console.log(str.__proto__.__proto__ ===Object.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(str.__proto__ === String.prototype);
