/**
 * 2017-9-17  Shi Ruitao
 */

var ag = 0; 
var func = function(){
    ag++;
    var obj = {
        age: ag
    }
    return obj;
}
var a = func();
console.log(a.age);
var b = func();
console.log(b.age);
var c = func();
console.log(c.age);
var d = func();
console.log(d.age);
