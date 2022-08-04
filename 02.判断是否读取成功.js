  
    const fs = require('fs')
fs.readFile('./files/11.txt','utf-8',function(err,dataStr){
  if(err){
        return console.log('读取失败'+err.message);
    }
    else{
        console.log('读取成功'+dataStr);
    }
   
})