/**
 * 
 */

const fish = require('./fish'); 

function carp() {};
carp.prototype = {
    looks: function(){
        console.log('look small');
    }
};
carp.prototype.__proto__ = fish.prototype;
module.exports = carp; 

