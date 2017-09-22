/**
 * 
 */

const fish = require('./fish'); 
function shark() {};
shark.prototype = {
    eat: function(){
        console.log('eat meat');
    }
}
shark.prototype.__proto__ = fish.prototype;

module.exports = shark; 

