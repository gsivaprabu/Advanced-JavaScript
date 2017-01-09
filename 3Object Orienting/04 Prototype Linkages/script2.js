function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function() {
    return "I am " + this.me;
};

Foo.prototype.speak = function() {
    alert("Hello, " + this.identify() + "."); // Super unicorn magic
};

var a1 = new Foo("a1");
a1.speak(); // alerts:"Hello , I am a1."

var a2 = new Foo("a2");
a2.speak(); // alerts:"Hello , I am a1."