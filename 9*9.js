/**
 * 2017-9-18  Shi Ruitao 
 */

 console.log('*****************************字符串方法*********************************');
var l = 1;
var str = '';
var p = 1;
for(var i = 1; i <= 9; i++ ){
    str += `${l++}\t`;
}
console.log('  ',str);
console.log('  -----------------------------------------------------------------');

for(var i = 1; i <= 9; i++ ){
    var line = '';
    line1 = `${l++}`;
    for(var j = 1; j <= i; j++){
        line +=`${i * j}\t`;
    }
    console.log(`${p++}| ${line}`);
} 
console.log('**************************数组方法*******************************')

for(var i = 1; i < 10; i++){
    var arr = [`${i}`,'|'];
    for(var j = 1; j <= i; j++){
        arr.push(i * j);
    }
    console.log(arr.toString());
}
