/*function trySomething(cb) {
    setTimeout(function() {
        var num = Math.random();
        if (num > 0.5) {
            cb(null, num);
        } else {
            cb("Too low !!");
        }
    }, 1000);
}

trySomething(function(err, num) {
    if (err) {
        console.error(err);
    } else {
        console.log("Number => " + num.toFixed(2));
    }
});
*/


function getData(d, cb) {
    setTimeout(function() { cb(d); }, 500);
}

getData(10, function(num1) {
    var x = 1 + num1;
    getData(30, function(num2) {
        var y = 1 + num2;
        getData("Meaning of life :" + (x + y), function(answer) {
            console.log(answer);
            // Meaning of life : 42
        });
    });
});
