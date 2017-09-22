/**
 * 
 */

const animal = require('./animal'); 

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
module.exports = fish; 
