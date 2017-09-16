/**
 * 2017-9-16   Shi Ruitao
 */

 var o = Object.create(null,{
     foo:{
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'hello'
     }
});

var a = Object.defineProperty(o,'n', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2
        
});
o.n = 1; 
console.log(a, o);


var b = Object.defineProperty(o, 'foo', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: null
});

var arr = [1,2];
Object.defineProperty(arr, '3', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 3
});
console.log(arr);

var arrs = ['a', 'b'];
Object.defineProperty(arrs, '4', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 128
});
console.log(arrs);

var arrss = [1,2];
Object.defineProperty(arrss, 'length', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 1
});
console.log(arrss);
