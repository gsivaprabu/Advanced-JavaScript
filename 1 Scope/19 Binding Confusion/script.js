/*function foo() {
    var bar = "bar1";
    baz();
}

function baz() {
    console.log(this.bar);
}

var bar = "bar2";
foo(); // bar2*/

// 'use strict'

function foo() {
    var bar = "bar1";
    this.baz = baz;
    console.log('this.baz');
    console.log(this.baz);
    this.baz();
}

function baz() {
    console.log(this.bar);
}

var bar = "bar2";
foo();
