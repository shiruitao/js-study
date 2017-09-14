/**
 * 2017-9-14    Shi Ruitao
 */
var a=0;

 for ( var i = 0; i <= 10000; i++ ){
    if(i%3===0){
        a+=i;
    } 
 }

 console.log(a);

 var A = [1, 1];
for( var i = 2; i <= 100; i++){
    A[i] = A[i - 1] + A[i - 2] ;
   
    console.log(A[i]);
}

var b = [1, 1];

for(var n = 2; n <=50; n++ ){
    b[n] = b[n - 1] + 2 * b[n - 2];

    console.log(b[n]);
}
