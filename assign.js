/**
 * 2017-9-16   Shi Ruitao
 */
var o = Object.create(null, {
    foo: {
        enumerable: true,
        value: 'hello'
    },
    bar: {
        enumerable: false,
        value: 'world'
    }
});

var obj = {};
Object.assign(obj, o);
console.log(o, obj);
console.log(o.foo, o.bar);
