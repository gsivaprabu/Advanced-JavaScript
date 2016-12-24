var foo = "foo";

(function() {
    var foo = "foo2";
    console.log('foo => ', foo); // "foo2"
})();

console.log('foo => ', foo); // "foo"
