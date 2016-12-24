/*var bar = "bar";

function foo(str){
	eval(str); //Cheating
	console.log('bar', bar);
}

foo("var bar = 42;");*/

// with keyword

var obj = {
    a: 2,
    b: 4,
    c: 6
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with(obj) {
    a = b + c;
    c = b - a;
    d = 3 //?
}

obj.d // undefined
console.log('obj.d', obj.d);
d // 3 - oops!
console.log('d', d);
