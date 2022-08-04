const path = require('path')
const fpath = 'a/b/c/index.html'
var fullName = path.basename(fpath)
// 获取文件名
console.log(fullName);
var nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt);
// 获取文件扩展名
const fext = path.extname(fpath)
console.log(fext);