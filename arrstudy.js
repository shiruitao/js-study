/**
 * 2017-9-14   Shi Ruitao
 */

 /********push() pop()***********/
 var arr = [1,2];

 arr.push('a', 'b');

 console.log( `arr.push() => [ ${ arr } ]` );

 arr.pop();

 console.log( `arr.pop() => [ ${ arr } ]`);

 var arr1 = [];

 arr1.pop();
 console.log( `arr1.pop() => [ ${ arr1 } ]` );
/*******unshift() shift()**** ***********/

var arr2 = [1, 2];

arr2.unshift('a', 'b');

console.log( `arr2.unshift() => [ ${ arr2 } ]` );

arr2.shift();

console.log( `arr2.shift() => [ ${ arr2 } ]` );

/*******   sort()  ***********/
var arr3 =  ['c', 'e', 'a', 'f', 'b', 'd', '3', '1', '2'];

arr3.sort();

console.log( `arr3.sort() => [ ${ arr3 } ]` );
/*********  reverse  **********/
var arr4 = ['1', '2', '3', '4', '5'];

arr4.reverse();

console.log(`arr4.reverse() => [ ${ arr4 } ]` );
