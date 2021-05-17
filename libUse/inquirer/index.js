const inquirer = require('inquirer')


inquirer.prompt(
    [
        {
            type:'input',
            name:'name',
            message:'名字'
        },
        {
            type:'confirm',
            name:'cancel',
            message: '是狗'
        }

    ])
    .then(answers => {
        console.log(answers);
    })
    .catch(err => {
        console.log('err')
        console.error(err)
    })
