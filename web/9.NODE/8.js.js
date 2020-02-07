console.log('1');
setTimeout(() => {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    });
    new Promise(function(resolve) {
        console.log('4');
        resolve()
    }).then(function() {
        console.log('5');

    })
});