const fs = require('fs')
fs.readFile('./files/成绩.txt','utf-8',function(err,dataStr){
    if(err){
        console.log('读取失败'+err.message);
    }else{
        console.log('读取成功'+dataStr);
      /*   const arrOld = dataStr.split(' ')

        // console.log(arrOld);
        const arrNew = []
        console.log(typeof(arrOld));
        arrOld.forEach(item=>{
            arrNew.push(item.replace('=',':'))
        })
        console.log(typeof(arrNew));
        const newStr = arrNew.join('\n')
        console.log(typeof(newStr));
        console.log(newStr); */
        
        const arrOld = dataStr.split(' ')
        const arrNew = []
        arrOld.forEach(item => {
            arrNew.push(item.replace('=',':'))
        });
        const newStr = arrNew.join('\n')
        console.log(newStr);
        fs.writeFile('./files/成绩.ok.txt',newStr,function(err){
            if(err){
                console.log('写入失败'+err.message);
            }else{
                console.log('写入成功');
            }
        })

    }
})

