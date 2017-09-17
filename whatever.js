/**
 * 2017-9-16   Shi Ruitao
 */

var a = function() {
    
};

a.arr = [1, 2, 3, 4];
a.obj = {
    name: 'shiruitao',
    age: 22
}
a.func = function(){

};
console.log(Object.getOwnPropertyNames(a));
Object.defineProperty(a, 'len', {
    //writable: true,
    enumerable:true,
    configurable: true,
    set: function() { return this.arr.length; },
})

a.len = 10;
console.log(a.arr.length);
