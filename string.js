/**
 * 2017-9-17     Shi Ruitao
 */

var str = '  shiruitao shiruitao shiruitao  ';
//var str = '';

console.log('--------charAt---------');
console.log("the index 2 is '" + str.charAt(2) +"'");
console.log("the index 15 is '" + str.charAt(15) +"'");
console.log("the index -1 is '" + str.charAt(-1) +"'");
console.log("the index -5 is '" + str.charAt(0) +"'");
console.log("the index -15 is '" + str.charAt(-15) +"'");
console.log(str.charAt(0));

console.log('--------concat---------');
console.log(str.concat(',hello',' world'));

console.log('--------includes---------');
console.log(str.includes('shi'));
console.log(str.includes('shi', -1));
console.log(str.includes('shi', 2));
console.log(str.includes('shi', 100));

console.log('--------endsWith---------');
console.log(str.endsWith('tao'));
console.log(str.endsWith('tao', 20));
console.log(str.endsWith('shi', 3));
console.log(str.endsWith('tao', 3));
console.log(str.endsWith('', 20));
console.log(str.endsWith('', -20));


console.log('--------indexOf---------');
console.log(str.indexOf('rui'));
console.log(str.indexOf('rui', 3));
console.log(str.indexOf('rui', 6));
console.log(str.indexOf('rui', 1));
console.log(str.indexOf('i', -2));
console.log(str.indexOf('', 3));
console.log(str.indexOf('', 30));
console.log(str.indexOf('', -3))



console.log('------lastindexOf-------');
console.log(str.lastIndexOf('o', 4));
console.log(str.lastIndexOf('o', -2));
console.log(str.lastIndexOf('o', 20));
console.log(str.lastIndexOf('', 5));
console.log(str.lastIndexOf('', -5));
console.log(str.lastIndexOf(''));

console.log('------padEnd-------');
console.log(str.padEnd(20,'str'));
console.log(str.padEnd(11,'1234567'));
console.log(str.padEnd(-5,'12'));

console.log('------padStart-------');
console.log(str.padStart(20, '123'));
console.log(str.padStart(5,'23'));
console.log(str.padStart(-3,'1'));

console.log('---------repeat----------');
console.log(str.repeat(0));
// console.log(str.repeat(-2));
console.log(str.repeat(2.5));

console.log('---------replace---------');
console.log(str.replace('rui', 'ABC'));  //

console.log('----------slice---------');
console.log(str.slice(2, 6));
console.log(str.slice(-4, -1)); // 倒着数
console.log(str.slice(4, -2));
console.log(str.slice(-2, 4));
console.log(str.slice(-2, 20));
console.log(str.slice(0, 1));

console.log('----------splits---------');
console.log(str.split('i', 3));
console.log(str.split('i', 13));
console.log(str.split('i', 50));
console.log(str.split('i', -1)); // 负数不起作用
console.log(str.split(' ', 0));

console.log('----------startwith---------');
console.log(str.startsWith('shirui'));
console.log(str.startsWith('rui', 3));
console.log(str.startsWith('s', -10)); // 负数默认为0
console.log(str.startsWith('rui'));

console.log('----------substr---------');
console.log(str.substr(0, 5));
console.log(str.substr(-6, 1)); //（起始位置，length）
console.log(str.substr(3, -1));

console.log('----------trim---------');
console.log(str.trim());      // 去掉起始和末尾空格

console.log('----------trimleft---------');
console.log(str.trimLeft());

console.log('----------trimright---------');
console.log(str.trimRight());
