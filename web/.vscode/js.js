// function superType() {
//     this.property = true;
// }

// superType.prototype.getSuperValue = function() {
//     return this.property
// }

// function Subtype() {
//     Subtype.subproperty = false;
// }

// //继承了superType
// Subtype.prototype = new superType;

// Subtype.prototype.getSubValue = function() {
//     return this.subproperty
// }

// var instance = new Subtype()

// console.log(instance.getSuperValue());
// 构造器函数
function test(a, b, c, d) {
    var arg = Array.prototype.slice.call(arguments, 1);
    console.log(arg); //[ 'b', 'c', 'd' ]

}
test("a", "b", "c", "d"); //b,c,d