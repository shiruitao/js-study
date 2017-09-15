/**
 * 2017-9-15     Shi Ruitao
 */

var year = [];
var month = [];
var day = [];

function years(){

    var i = 2010;

    for(i - 2010; i <=2017; i++){

        year[i - 2010] = i; 
    }

    return year;

}

years();

console.log(year);

function months(){
    var i = 1;

    while(i<=12){
        month[i - 1] = i;

        i++;

    }

    return month;
}

months();

console.log(`this month is ${month[2]} `);

console.log(month);

function days(y,m){
    if(y % 400 === 0 || y % 4 ===0 && y % 100 !== 0){

        return 29;
    }
    else{
        return 28;
    }
switch(m){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:return 31; 
    break;

    case 4: case 6: case 9: case 11:return 30; 
    break;
    }

}

console.log(days(2017,2));
