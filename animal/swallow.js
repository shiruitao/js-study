/**
 * 
 */

const bird = require('./bird'); 

function swallow() {};
swallow.prototype = {
    eat: function(){
        console.log('eat grain');
    }
}
swallow.prototype.__proto__ = bird.prototype;

module.exports = swallow; 
