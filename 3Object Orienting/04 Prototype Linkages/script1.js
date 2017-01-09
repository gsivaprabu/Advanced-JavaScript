function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function() {
		console.log("I am " + this.me);
    return "I am " + this.me;
};

var a1 = new Foo("a1");
a1.identify();

a1.identify = function() { // shadowing
    alert("Hello, " + Foo.prototype.identify.call(this) + ".");
};

a1.identify(); // alerts: "Hello, I am a1."