const execa =require('execa')

async function  log(){
    const {stdout} =await execa('git status')
    console.log('=================')
    console.log(stdout)
}
 a =log()
console.log(a)
