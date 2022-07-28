const inquirer = require('inquirer')
const fs = require('fs')


inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'checkbox',
        name: 'stack',
        message: 'What languages do you know?',
        choices: ['CSS', 'JavaScript', 'Node.js']
    },
    {
        type: 'list',
        name: 'method',
        message: 'What is your preferred method of communication?',
        choices: ['face to face', 'email', 'phone']
    }
]).then((answers) => {

    const filename = `${answers.name.toLowerCase().split(' ').join('')}.json`
    
    fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    )
}) 

// JSON.stringify(answers, null, '\t')