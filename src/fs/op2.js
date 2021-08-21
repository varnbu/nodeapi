const fs = require("fs/promises");
const path = require('path')

async function deepCopyFiles ( type, currentDir = './',copyDir) {
    console.log('currentDir : ====>',currentDir)
    console.log('copyDir : ====>',copyDir)
    const list = await fs.readdir(path.join(__dirname, currentDir))
    for (const it of list) {
        try {
            let currentFilePath = path.join(currentDir,it)
            console.log('currentFilePath: ' + currentFilePath)
            let isDirectory = false
            let stat = await fs.lstat(currentFilePath)
            isDirectory = stat.isDirectory()
            if (isDirectory) {
                await deepCopyFiles( type, path.join(currentDir, it),copyDir)
            } else {
                let temp = path.parse(it)
                if (temp.ext === type) {
                    console.log(temp);
                    let copyPath = copyDir + '/' + temp.base
                    console.log('copyPath: '+copyPath)
                    await fs.copyFile(currentFilePath, copyPath)
                    console.log('success',it)
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}
const  copyDir = 'copy'
if(copyDir){
     fs.mkdir(copyDir)
}
deepCopyFiles('.html', './', copyDir).then(r  =>{
    console.log('success end')
})
