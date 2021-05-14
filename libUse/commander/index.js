const {Command} = require('commander')
const program = new Command()
program.version('0.0.2')
console.log('commander version: ' + program.version())

program
    .requiredOption('-l, --log-haha','hahah',true)
    .option('-d, --dddd','输出dddd',true)
    .option('-c, --color <type>','颜色 默认 red','red')
    .option('--say-hello','say hello welcome')
    .option('--no-say-hello','不说你好')
    .option('-o, --other [letter...]','其他参数')
    .option('-o1, --other1 [lll]','其他参数1')
    .option('-o2, --other2 <l...>','其他参数2')


const brew=program.command('brew')

brew.command('tea').action(()=>{
    console.log('brew tea')
})

const doDo = program.command('play')
 doDo.command('all').action(()=>{
     console.log('play,all')
 })


program.parse(process.argv)
const options = program.opts()
console.log(options)
console.log(options.color)
if(options.logHaha) {
    console.log('haha')
}
