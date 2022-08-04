const path = require('path')
const fs = require('fs')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname,'./html/案例.html'),'utf8',function(err,dataStr){
    if(err){
        console.log('读取失败'+err.message);
    }else{
        console.log('读取成功');
        resolveCss(dataStr)
        resolveScript(dataStr)
        resolveHtml(dataStr)
    }
})

function resolveCss(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1); 
    const newCss = r1[0].replace('<style>','').replace('</style>','')
    // console.log(newCss);
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCss,function(err){
        if(err){
            console.log('写入样式失败'+err.message);
        }else{
            console.log('写入样式成功');
        }
    })
}
function resolveScript(htmlStr){
    const r2 = regScript.exec(htmlStr)
   
    const newScript = r2[0].replace('<script>','').replace('</script>','')
   
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newScript,function(err){
        if(err){
            console.log('写入脚本失败'+err.message);
        }else{
            console.log('写入脚本成功');
        }
    })
}
function resolveHtml(htmlStr){
    const newHtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    // console.log(newHtml);
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHtml,function(err){
        if(err){
            console.log('写入Html文件失败'+err.message);
        }else{
            console.log('写入Html文件成功');
        }
    })
}