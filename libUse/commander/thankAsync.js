const {Command} = require('commander')

const program = new Command()

program.arguments('<name>')
    .option('-t, --title <honorrific>', 'title before name')
    .option('-d, --debug', 'display debug info')
    .action(thanks)

async function thanks(name, options, command){
    return new Promise(resolve => {
        setTimeout(()=>{
            if (options.debug){
                console.error('called %s width options %o',command.name(), options)
            }
            const title = options.title ? options.title+' ' : ''
            console.log('thanks ',title,name)
        },2000)
    })
}
// program.parse(process.argv);
// 替换函数
program.parseAsync()

// node thank.js xiaoming -d -t 会员
