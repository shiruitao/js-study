/**
 * 2017-9-14    Shi Ruitao
 */

var obj = {
    age: 1,

    boon: true,

    func: function() {
        console.log(`age => ${ this.age }, boon => ${ this.boon }, func => ${ this.func }`);
    }
};
console.log('---------------------obj.func()--------------------')
obj.func();

// 外部
obj.a = function(){
    this.age = 'a';
}
console.log('---------------------obj.func()--------------------')
obj.func();
obj.a();
console.log('---------------------obj.func()--------------------')
obj.func();

var o = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        configurable: false,
        get: function() { return 10; },
        set: function(value) {           
            console.log('Setting `o.bar` to', value );
        }
    }
});
console.log(Object.getOwnPropertyDescriptor(o, 'foo'));
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(o, 'foo')));
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(o, 'bar')));


o.name = 'abc';
console.log(Object.keys(o));
console.log(`type o is ${typeof o}, variable o is ${Object.getPrototypeOf(o)}`);

var arr = ['a', 'b', 'c'];
arr['name'] = 'shiruitao';
arr.age = 11;
console.log(Object.getOwnPropertyDescriptor(arr, 'name'));

console.log(Object.keys(arr));
console.log(arr['0']);
console.log(arr.name);//?
console.log(`type arr is ${typeof arr},variable arr is ${Object.getPrototypeOf(arr)}`)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

var F = function (){
    console.log('abc');
};
F.age = 20;
console.log(Object.keys(F));
console.log(F.age);
F();

console.log(`type F is ${ typeof F },variable arr is ${Object.getPrototypeOf(F)}`);
