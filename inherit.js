/**
 * 2017-9-22 Shi Ruitao
 */


console.log('-------------------(1)-----------------');
function animal(){

};
animal.b = 'a';
animal.prototype.species = 'manmal'

function cat(name){
    animal.apply(this, arguments)
        this.name = name
};
var a = new cat('a');
cat.species = 'abc';

console.log(animal.prototype.species);

console.log(a.b);

/*
console.log('-------------------(2)-----------------');

function animal(){
    
}
function cat(){
    
}
cat.prototype = animal.prototype;
cat.prototype.constructor = cat;
cat.prototype.foo = 12;
function dog(){
    
}
dog.prototype = animal.prototype
dog.prototype.constructor = dog;

var d = new dog();
console.log(d.foo)
var c = new cat();
console.log(c.foo);
*/
/*
console.log('-------------------(3)-----------------');

function Animal() {
    this.species = 'animal';
}
  
function Cat(name,color) {
this.name = name;
this.color = color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

var a = new Cat();
console.log(a)
*/
/*
console.log('-------------------(4)-----------------');
function Animal() { };
function Cat() { };
Animal.prototype.species = "animal";
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var a = new Animal();
console.log(a);
var b = new Cat();
console.log(b);
*/
/*
console.log('-------------------(5)-----------------');
var F = function(){};
function Animal(){};
function Cat(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;
*/
/*
console.log('-------------------(6)-----------------');
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
      c[i] = p[i];
    }
    c.uber = p;
}
*/
/*
console.log('-------------------(7)-----------------');
function object(o) {
    function F() {};
  
    F.prototype = o;
    return new F();
}
*/
/*
console.log('-------------------拷贝继承-----------------');
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

function a(){

}
*/

/*
console.log('-------------------非构造函数继承-----------------');
function object(o) {
function F() {}

F.prototype = o;
return new F();
}

console.log('-------------------浅拷贝-----------------');
function extendCopy(p) {
var c = {};

for (var i in p) {
    c[i] = p[i];
}

c.uber = p;
return c;
}

console.log('-------------------深拷贝-----------------');
function deepCopy(p, c) {
    var c = c || {};
  
    for (var i in p) {
      if (typeof p[i] === 'object') {

         c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
            } else {
                c[i] = p[i];
            }
    }
    return c;
  }
*/