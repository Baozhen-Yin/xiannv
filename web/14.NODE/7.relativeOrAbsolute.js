const fs = require('fs');
const path = require('path')
console.log(__dirname);
console.log(path.join(__dirname, './1.nodejs.js'));

fs.readFile(path.join(__dirname, './1.nodejs.js'), 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
    //读取成功
})