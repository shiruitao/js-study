/**
 * 2017-9-14    Shi Ruitao
 */

var arr = [1, 2, 3, 4, 5];
//forEach()
arr.forEach(function(ele) {
    console.log( `arr.forEach() => [ ${ele * 2} ]` );
});

//map()
console.log(`arr.map() => [ ${ arr.map(function(arg){
    return arg + 1;
}) } ]` );

//filter()
console.log(`arr.filter() => [ ${ arr.filter(function(a){
    return a < 4;
}) } ]`);

//reduce()
console.log( `arr.reduce => [ ${ arr.reduce( function(fir, sec){
    return fir + sec;
} ) } ]` );

//every()
console.log( `arr.every => [ ${ arr.every(function(b){
    return b > 2;
} )} ]` );

//some()
console.log( `arr.some() => [ ${ arr.some(function(c){
    return c = 5;
}) } ]` );
