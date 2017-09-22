
const bird = require('./bird');

function eagle() {};
eagle.prototype = {
    eat: function(){
        console.log('eat meat');
    }
}
eagle.prototype.__proto__ = bird.prototype;
module.exports = eagle; 
