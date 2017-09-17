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
