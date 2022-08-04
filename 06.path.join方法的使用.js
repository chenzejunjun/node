/* 
注意：
../可以抵消一个路径

*/
const path = require('path')
const fs = require('fs')
const pathStr = path.join('/a','/b/c','../','/d')
console.log(pathStr);
fs.readFile(path.join(__dirname,'/files/1.txt'),'utf8',function(err,dataStr){
    if(err){
        console.log('读取失败'+err.message);

    }else{
        console.log('读取成功'+dataStr);
    }
})
