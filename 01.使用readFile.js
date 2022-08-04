const fs = require('fs')
fs.readFile('./files/11.txt','utf-8',function(err,dataStr){
  
    console.log(err.message);
    console.log('--------------');
    console.log(dataStr);
})