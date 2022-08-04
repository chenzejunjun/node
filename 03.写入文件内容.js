const fs = require('fs')
fs.writeFile('./files/1.txt','陈泽君',function(err){
    if(err){
        console.log('写入失败'+err.message);
    }else{
        console.log('写入成功');
    }
})