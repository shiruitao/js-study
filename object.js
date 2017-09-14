/**
 * 2017-9-14    Shi Ruitao
 */

var obj = {
    age: 1,

    boon: true,

    func: function() {
        console.log(`age => ${ this.age }, boon => ${ this.boon }, func => ${ this.func }`);
    }
};

obj.func();

//外部
obj.age = function(){
    this.age = 'a';
}

obj.func();

obj.age();

obj.func();
