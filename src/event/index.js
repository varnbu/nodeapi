const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

myEmitter.on('event', (data) => {
    console.log('event emit !');
    console.log('data is', data);
});

// 可调用多次以及重复注册
myEmitter.on('logInfo', (info) => {
    console.log('event logInfo', info);
})

myEmitter.on('logInfo', (info) => {
    console.log('event logInfo 2', info);
})

// 注册的事件只能调用一次
myEmitter.once('once', (str) => {
    console.log('once event', str)
})
// 所有的事件名
console.log(myEmitter.eventNames())
// 监听器的最大限制数
console.log(myEmitter.getMaxListeners())

setTimeout(() => {
    myEmitter.emit('event', {name: '小星星'})
    myEmitter.emit('logInfo', '哈哈哈')
    myEmitter.emit('once', 'data 1')
    myEmitter.emit('once', 'data 2')

     // error  事件比较特殊  如果触发并且 error 事件没有注册的时候 ， 会抛出错误、打印堆栈跟踪并退出 Node.js 进程
    // 一般为了防止崩溃 ，可以使用 domain 模块 ； 但更推荐的是注册 error 事件
    // myEmitter.emit('error', 'data 2')


    const listeners = myEmitter.rawListeners('event')
    console.log(listeners[0]('abac'));

}, 1000)

