const http = require('http')
const server = http.createServer()
server.on('request',(req,res) =>{
    const url = req.url
    const method = req.method
    const str = '弄得 request url is '+url+',and request method is '+method
    // 解决中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    console.log(str);
    res.end(str)
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})