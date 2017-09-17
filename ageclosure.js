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
var a = func();
var b = func();
var c = func();
var d = func();
console.log(a, b, c, d);
