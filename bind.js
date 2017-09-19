/**
 * 2017-9-18 Shi Ruitao
 */
console.log('-----------apply------------')
var b = {
    name: 'abc',
};
var a = function(x, y){
    this.age = 2;
    return this.age+ x + y;
};
console.log(a.apply(b, [2,3]), b);

console.log('-----------bind------------')
var c = {
    name: 'abc',
};
var d = arrayToDestruct = function(x, y){
    this.age = 3;
    return this.age+ x + y;
};
console.log(a.bind(b, 1, 2)(), b)

console.log('-----------call------------')
console.log(a.call(b, 2, 2), b)
