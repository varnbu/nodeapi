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
            } else {
                let isDirectory = false
                let stat = await fs.lstat(it)
                isDirectory = stat.isDirectory()
                if (isDirectory) {


                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}

test(copyDirName, copyFileType)

function deep (dir, list = []) {
    const arr = fs.readdirSync(path.join(__dirname, dir))
    arr.forEach(item => {
        const child = []
        list.push({name: item, child})
        const itemPath = path.join(__dirname, dir + item)
        const isDir = fs.statSync(itemPath).isDirectory()
        if (isDir) {
            const temp = dir + item + '/'
            deep(temp, child)
        }
    })
    return list
}

deep('/src/docs/', list)
console.log(JSON.stringify(list))

