setTimeout(function() {
    console.log("will be executed at the top of the next Event Loop")
}, 0)
var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => { resolve(1); }, 0);
});
setTimeout(function() {
    console.log("will be executed at the bottom of the next Event Loop")
}, 0)

var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => { resolve(1); }, 0);
});

for (let i = 0; i < 10; i++) {
    (function(j) {
        p1.then(function(value) {
            console.log("promise then - " + j)
        });

    })(i)
}
new Promise(function(resolve, reject) {
    console.log("11110");
    resolve()
}).then(function() {
    console.log('123456789');

}).then(function() {
    console.log('第二个then')
}).then(function() {
    console.log('第3then')
})
for (let i = 0; i < 5; i++) {
    (function(j) {
        p2.then(function(value) {
            console.log("promise2 then111 - " + j)
        });

    })(i)
    console.log(1);

}


console.log('第一？')