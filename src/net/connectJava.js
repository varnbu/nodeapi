const net = require('net')

const server = net.createServer()
server.on('connection', socket => {
    console.log('client connect')
    socket.setEncoding('utf8')
    console.log(socket.remoteAddress)
    console.log(socket.remotePort)
    socket.write('hello\n')
    socket.on('data', (chunk) => {
        console.log('>>> ', chunk);

        socket.write('ok \n', 'utf8', (err) => {
            if(err){
                console.log('出错了')
                console.log(err)
            }
            console.log('send data end')
        })
    })

    socket.on('error', err => {
        console.log(err);
    })

})

//
server.listen({
    host: 'localhost',
    port: 6666,
})


console.log('server start')
