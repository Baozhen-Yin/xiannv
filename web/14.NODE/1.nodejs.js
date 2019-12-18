var first = 'hello nodejs'
console.log(first);

function fn() {
    console.log('函数被调用了');

}
fn();

for (var i = 0; i < 5; i++) {
    console.log(i);
}
// module.exports.first = first

console.log('文件被修改了');
console.log('继续修改')