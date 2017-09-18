/**
 * 2017-9-18  Shi Ruitao
 */

console.log('-------if-------')
if(true){
    var a = 3;
}
console.log(a);
console.log('--------for---------')
for(var i = 1; i <= 5; i++){
    a += 1 ;
}
console.log(a, i);
console.log('------do while------')
do{
    var c = 1;
    i++;

} while( i <= 15);
console.log(c);

console.log('------func-------')
for(var j = 1; j < 3; j++){
    var func = function(b) {
        var d;
        return  d = b + a;
    }
    var fun = function() {
        switch(func(j)){
            case 9: return 'a';
            case 10: return 'b';
            case 11: return 'c'; break;
        };
    };
    console.log(func(j),fun()); 
}

console.log('-------obj-------')
var obj = {
    e: [1, 2, 'abc']
};
var ff = function(){
    return obj.e.unshift(a);
}
ff();
obj.e.push(a);
console.log(obj.e);
