// 代码2
const debounce = (func, wait = 0) => {
    let timeout = null
    let args
    function debounced(...arg) {
        args = arg
        if(timeout) {
            clearTimeout(timeout)
            timeout = null
        }
        // 以Promise的形式返回函数执行结果
        return new Promise((res, rej) => {
            timeout = setTimeout(async () => {
                try {
                    console.log(this)
                    const result = await func.apply(this, args)
                    res(result)
                } catch(e) {
                    rej(e)
                }
            }, wait)
        })
    }
    // 允许取消
    function cancel() {
        clearTimeout(timeout)
        timeout = null
    }
    // 允许立即执行
    function flush() {
        cancel()
        console.log(this)
        return func.apply(this, args)
    }
    debounced.cancel = cancel
    debounced.flush = flush
    return debounced
}
let a  = debounce(function () {
    console.log('a')
},3000)
a()
let b  = debounce( ()=> {
    console.log('b')
},3000)
b()
b.flush()


