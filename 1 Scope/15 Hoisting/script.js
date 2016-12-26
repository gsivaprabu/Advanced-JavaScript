/*a;
b;


var a = b;
var b = 2;

a;
b;*/


var a = b();
var c = d();

a;
c;

function b() {
    return c;
}

var d = function() {
    return b();
}