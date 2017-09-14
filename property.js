/**
 * 2017-9-14   Shi Ruitao
 */

 //object
var  student = {
    name: 'hello',

    age: 11,
    
    city: 'baoding'
};

for (var key in student){
    console.log( `key => ${key} ,value => ${student[key]}` );
}
