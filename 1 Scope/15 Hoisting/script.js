/*a;
b;


var a = b;
var b = 2;

a;
b;*/


/*var a = b();
var c = d();

a;
c;

function b() {
    return c;
}

var d = function() {
    return b();
}*/


/*foo(); //"foo"

var foo = 2;

function foo(){
		 console.log('bar');
}
function foo(){
		 console.log('foos');
}

function foo(){
		 console.log('foo');
}

console.log('foo => '+ foo);*/



/*a(1);

function a(foo) {
    if (foo > 20)
        return foo
    return b(foo + 2)
}

function b(foo) {
    return c(foo) + 1;
}

function c(foo) {
    return c(foo * 2);
}
*/

function foo(bar) {
    if (bar) {
        console.log(baz); //reference Error
        let baz = bar;
    }
}

foo("bar");