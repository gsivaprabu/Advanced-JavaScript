var foo = "foo";

(function siva(bar) {

    var foo = bar;
    console.log('foo => ', foo); // "foo"

})(foo);

console.log('foo => ', foo); // "foo"