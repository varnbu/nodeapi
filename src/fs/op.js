const fs = require('fs/promises')
const path = require('path')
const copyDirName = 'copy'
const copyFileType = '.html'

async function test (copyDirName, copyFileType) {
    let tempPath = path.join('./')
    console.log(tempPath);
    const list = await fs.readdir(path.join('./'))
    console.log(list)
    await fs.mkdir(copyDirName)
    for (const it of list) {
        try {
            let temp = path.parse(it)
            if (temp.ext === copyFileType) {
                console.log(temp);
                let copyPath = copyDirName + '/' + temp.base
                console.log(copyPath)
                await fs.copyFile(it, copyPath)
                console.log('success')
            }
        } catch (err) {
            console.log(err)
        }
    }
}

test(copyDirName, copyFileType)
