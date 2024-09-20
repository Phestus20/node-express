const path = require('path')
console.log(path.sep)// to get the separator

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);

const basename = path.basename(filePath) // gives us the name of the last file
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')// to get the absolute

console.log(basename)
console.log(absolute)
