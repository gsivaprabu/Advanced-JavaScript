/*setTimeout(function() {
    console.log('one');
    setTimeout(function() {
        console.log('Two');
        setTimeout(function() {
            console.log('Three');
        }, 3000)
    }, 3000)
}, 3000)

*/

function one(cb) {
    console.log('cb', cb);
    console.log('One');
    setTimeout(cb, 1000);
}

function two(cb) {
    console.log('cb', cb);
    console.log('Two');
    setTimeout(cb, 1000);
}

function three() {
    console.log('Three');
}

one(function() {
    two(three);
});
