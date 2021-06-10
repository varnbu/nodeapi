const path = require('path')

module.exports={
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        filename: "b.js",
        path: path.resolve(__dirname,'dist')
    }
}
