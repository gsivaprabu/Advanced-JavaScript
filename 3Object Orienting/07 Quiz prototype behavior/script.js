function Foo() {
    this.me = who;
}

Foo.prototype.speak = function() {
    alert("hello, I am " + this.me + ".");
};

var a1 = new Foo("a1");

$("#speak").click(a1.speak);