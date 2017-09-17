/**
 * 2017-9-17   ShiRuitao
 */

var a = function(){
    return function(x){
        return x+1;
    };
};
var b = a();
console.log(b(1));

var d = a();
console.log(d(2));
b.key = 5;

console.log(b.key, d.key);

//a()返回值为function(x){x+1}。 a()(3)调用返回的function；
console.log(a()(3));
