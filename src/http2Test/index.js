const http2 = require('http2')
const server = http2.createServer()
server.on("stream", (stream,headers)=>{
    console.log(stream);
    stream.respond({
        'content-type':'text/html',
        'status':200
    })
    stream.end('<h1>200</h1>')
})
server.listen(8086)
console.log(111)
