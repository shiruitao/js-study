/**
 * 
 */

const animal = require('./animal'); 

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

module.exports = bird; 
