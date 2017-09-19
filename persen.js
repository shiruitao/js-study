/**
 * 2017-9-19   Shi Ruitao
 */

var person = function(age){
    this.age = age;
} 
person.prototype.getAge = function(){
    return this.age;
};
var shi = new person(2);
var rui = new person(22);
console.log(shi.getAge(), rui.getAge() );
console.log('-----------------------------')
shi.c = function(){
    return 1;
};

rui.d = function(){
    return 3;
};
//console.log(shi.d());
console.log(typeof shi.c);
console.log(shi.__proto__ === person.prototype);
console.log(shi.c.__proto__ === Function.prototype);
console.log(rui.d.__proto__ === Function.prototype);
//shi.__proto__ = null;
//console.log(shi.getAge());

Object.prototype.shi = function(){
    console.log('abc');
};
shi.shi();

Function.prototype.g = function(){
    return 1;
};
//person.g();
console.log(rui.getAge.g());

console.log('------------------------------------');
var tao = new shi.c();
shi.c.prototype.f = function(){
    return 'tao';
};
console.log(tao.f());
