
var obj = {
    age: 2,
    con: function(){
        console.log(this.age)
    }
}
obj.con()
obj.a = function(){
    this.age = 1
}
console.log('------------------age=1---------------------')

obj.a()
obj.con()

console.log('--------------------pers--------------------')

var pers = {
     person: function(age){
        this.a = age;
    }
}
pers.getAge = function(){
    return this.a;
};
pers.person(2);
//person(22);
console.log(pers.getAge())

console.log('---------------------person--------------------')

var person = function(age){
    this.age = age;
}
person.prototype.getAge = function(){
    return this.age;
};
var shi = new person(2);
var rui = new person(22); 
console.log(shi.getAge(), rui.getAge() );
