/**
 * 2017-9-20    Shi Ruitao
 */

function animal() {
    animal.prototype = {
        a: 'breathe',
        b: 'move'
    }
};
animal();
/**---------------2--bird--------------- */
function bird() {};
bird.prototype = {
    fly: function(){
        console.log('can fly');
    },
    feature: function() {
       console.log('have plume');
    }
}
bird.prototype.__proto__ = animal.prototype;

/**-------------2----fish--------------- */
function fish() {};
fish.prototype = {
    swim: function(){
        console.log('can swim');
    },
    breath: function(){
        console.log('have gill');
    } //sai
}
fish.prototype.__proto__ = animal.prototype;

/**------------3---swallow----------------- */
function swallow() {};
swallow.prototype = {
    eat: function(){
        console.log('eat grain');
    }
}
swallow.prototype.__proto__ = bird.prototype;

/**-------------3--eagle--------------- */
function eagle() {};
eagle.prototype = {
    eat: function(){
        console.log('eat meat');
    }
}
eagle.prototype.__proto__ = bird.prototype;

/**-----------3----carp--------------- */
function carp() {};
carp.prototype = {
    looks: function(){
        console.log('look small');
    }
};
carp.prototype.__proto__ = fish.prototype;

/**-----------3----shark--------------- */
function shark() {};
shark.prototype = {
    eat: function(){
        console.log('eat meat');
    }
}
shark.prototype.__proto__ = fish.prototype;

console.log('-----------4----swallow---------------');
var obj1 = new swallow();
obj1.name = 'swallow';
console.log(Object.entries(obj1));
obj1.fly();
obj1.feature();
obj1.eat();

console.log('-----------4----eagle---------------')
var obj2 = new eagle();
obj2.name = 'eagle';
console.log(Object.entries(obj2));
obj2.fly();
obj2.feature();
obj2.eat();

console.log('-----------4----carp---------------');
var obj3 = new carp();
obj3.name = 'carp';
console.log(Object.entries(obj3));
obj3.swim();
obj3.breath();
obj3.looks();

console.log('-----------4----shark---------------');
var obj4 = new shark();
obj4.name = 'shark';
console.log(Object.entries(obj4));
obj4.swim();
obj4.breath();
obj4.eat();

var a = Object.create(function(){},{})
console.log(typeof a)
