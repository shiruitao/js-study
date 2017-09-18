/**
* 2017-9-18   Shi Ruitao
*/

/*function add(x){
    return this.a+x;
}
var a = 1;
console.log(add(1))*/
/*
var obj = {
    a: 1,
    add: function(x){
        return function(){
            console.log(`this.a -> ${this.a}`)
            return this.a + x;
        }
        
    }
}
console.log(obj.add(1)());
setTimeout(obj.add(2), 1000);
*/
console.log('-----------------------');

var  obj = {
    a: 1,
    add: function(x){
        this.b = 2;
        this.add = undefined;
        return this.a + x;
        
    }
};
console.log(obj.add(2), obj.b);
console.log(obj.add(2), obj.b);
