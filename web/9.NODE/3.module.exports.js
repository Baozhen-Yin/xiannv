// const greeting = name => 'hello' + name;
// const greeting = (name) => {
//     return 'hello ${name}';
// }
const greeting = name => `您好 ${name}`;
const x = 100;
exports.x = x
module.exports.greeting = greeting; // 导出""对象""最终以module.exports为准
module.exports = {
    name: '小可爱' //{ name: '小可爱' }
}
module.exports.x = x
exports = {
    age: 18 //{ name: '小可爱' }
}