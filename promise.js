/**
 * 2017-9-23  Shi Ruitao
 */

function func() {
    return new Promise(function (resolve, reject) {
            resolve(1)
    });
}

func().then(function (value) {
    setTimeout(function () {
        console.log(`1--${value}`);
       
    }, 0)
    return value;
}).then(function (value) {
    console.log(`2--${value}`);
    return 2 + value;
}).then(function (value){
    console.log(`3--${value}`);
    console.log(a)
    return 3 + value;
}).catch(function (error) {
    console.log(error)
    return 'a'
}).then(function(x){
    console.log(x);
})
