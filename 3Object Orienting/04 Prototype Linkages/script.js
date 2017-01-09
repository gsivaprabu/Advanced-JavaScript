function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function() {
    return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");


a2.speak = function() {
    alert("Hello, " + this.identify() + ".");
};

console.info('Object.getPrototypeOf(a1)  => ', Object.getPrototypeOf(a1));
console.log('a1.__proto__  => ', a1.__proto__);
console.log('a2.__proto__  => ', a2.__proto__);
console.log('Foo  => ', Foo);
console.log('a2.constructor  => ', a2.constructor);
console.log('a2.constructor.prototype  => ', a2.constructor.prototype);


a1.__proto__ === Object.getPrototypeOf(a1);
a1.__proto__ === a2.__proto__;
a2.constructor === Foo;
a2.__proto__ === a2.constructor.prototype;