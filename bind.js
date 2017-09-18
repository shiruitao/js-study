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
this.age1 = 2;
var obj = {
    age1: 1,
    fun: function(p1, p2, p3){
        return this.age1 + p1 + p2 + p3;
    }
};
var f = obj.fun;
console.log(f.bind(obj, 1, 2, 3)());
