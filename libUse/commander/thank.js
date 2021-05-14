const {Command} = require('commander')

const program = new Command()

program.arguments('<name>')
    .option('-t, --title <honorrific>', 'title before name')
    .option('-d, --debug', 'display debug info')
    .action((name, options, command) => {
        if (options.debug){
            console.error('called %s width options %o',command.name(), options)
        }
        const title = options.title ? options.title+' ' : ''
        console.log('thanks ',title,name)
    })

program.parse()

// node thank.js xiaoming -d -t 会员
