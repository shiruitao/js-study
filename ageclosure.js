/**
 * 2017-9-17  Shi Ruitao
 */

var ag = 1;
var func = function(){
    var obj = {
        age: ag++
    }
    return obj;
}

console.log(func(), func(), func(), func());

var func1 = function(a){
    var i = 1;
    return function(){
        var obj1 = {
        age1: i
        };
        i = i + a;
        return obj1;
    }
};

var f = func1(3);
console.log(f(), f(), f(), f());
