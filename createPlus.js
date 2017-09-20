/**
 * 2017-9-20   Shi Ruitao
 */
var obj = Object.create(null, {
    foo: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 90
    },
    age: {
        enumerable: false,
        writable: false,
        configurable: false,
        value: 1
    }
});
var a = Object.create(obj, {
    name: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'shi'
    }
});
console.log(a.age);
console.log('-----------------Object.prototype----------------');
Object.prototype.sex = 'man'; //(3)
console.log(`obj.sex -> ${obj.sex}`);
console.log(`a.sex -> ${a.sex}`);

console.log('-----------------Number.prototype----------------');
var c = 2; //(3)
Number.prototype.num = 1;
console.log(`c.num -> ${c.num}`);

console.log('-----------------Freeze----------------');
Object.freeze(obj); // (4)
obj.birth = 2017;
console.log(`obj.birth -> ${obj.birth}`) // 无法加入birth属性
//console.log(obj.value)
console.log(a.age);
Object.prototype.birth = 2016;
console.log(`obj.birth -> ${obj.birth}`) // 在原型对象中加入 可以访问到birth属性
delete obj.foo;
console.log(obj.foo);

console.log('-----------------seal----------------');
//Object.seal(a);
a.name = 'rui';
delete a.name;
console.log(`a.name -> ${a.name}`);

Object.length = 2;
console.log(Object.length);

Object.defineProperty(a, 'get', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 'abc'
});

console.log(`a.get -> ${a.get}`)
