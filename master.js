const cp = require('child_process');

const childProcess = cp.fork(__dirname + '/child.js');

childProcess.send('hello')
childProcess.on('message', e => {
    console.log('p:', e)
})
