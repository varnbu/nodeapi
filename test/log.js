let _console = window.console
let keys = Object.keys(_console)
console.log(keys)
let Log = {}
keys.forEach(key => {
    if (typeof _console[key] === 'function') {
        if (!Log[key]) {
            // Log[key] = function () {
            //     // console.log('自定义拦截函数')
            //     let info ={...arguments}
            //     report(info)
            //     // _console[key].call(window.console, ...arguments)
            //     // console.log(this)
            // }
            Log[key]=window.console[key]
        }
    }
})
window.console.log=function (...args){
    report(args)
}
function report (info) {
    Log.log.apply(window.console,['report'])
    Log.log.apply(window.console,info)
    // console.log(info)
    // let url = 'http://localhost:8090/api/v1/i'
    // fetch(url,{method:'POST',
    //     headers:{
    //         'Content-Type': 'application/json'
    //     }
    //     ,body:JSON.stringify(info)
    // }).then(res => {
    //     // console.log(res);
    //
    // })
}
