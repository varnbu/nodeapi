const {gulp,series} = require("gulp")
const exec = require("child_process").exec
const cwds = [
    {
        exe: 'dir ',
        func:"dir"
    }
    ,
    {
        exe: 'git add .',
        func:"gitAdd"
    }
    ,
     {
        exe: 'git commit -m ',
         func: 'gitCommit',
        msg: 'build platform '
    }
    ,
    {
        exe: 'git push',
        func: 'gitPush'
    }
]

const exes = {}
let keys = Object.keys(cwds)
console.log(keys);
for (const it of cwds) {
    console.log(it.exe)
    let fun = createExecTaskFunction(it.exe ,{
        msg: it.msg || ''
    })
    exes[it.func]=fun
}

function createExecTaskFunction (cwd, {dir, msg}) {
    console.log(cwd)
    return function tast() {
        return new Promise((resolve, reject) => {
            exec(cwd, function (err, stdout, stderr) {
                process.chdir('../')
                console.log('子进程工作', process.cwd())
                if (err) {
                    console.log(err);
                    reject(err)
                }
                if (stdout) {
                    console.log(stdout.toString())
                    resolve(stdout)
                }
                if (stderr) {
                    console.log(stderr)
                    reject(stderr)
                }
            })
        })
    }
}
function defaultFun(){
    return Promise.resolve('urs')
}
// ls()
exports.default = series(defaultFun)
