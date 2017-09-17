/**
 * 2017-9-17   Shi Ruitao
 */

 var  divide = function(x){
     return function(y){
        return y/x;
     };
 };
 var a = divide(2);
 console.log(a(6));
 console.log(divide(5)(10));

 var b = divide();
 a.key = 1;
 console.log(a.key, b.key);
