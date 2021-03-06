/**
 * 2017-9-16    Shi Ruitao
 */

var o = Object.create(null, {
    foo: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'hello'
    },

    bar: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'world'
    }
});

console.log(Object.entries(o));
console.log(Object.getOwnPropertyNames(o));
