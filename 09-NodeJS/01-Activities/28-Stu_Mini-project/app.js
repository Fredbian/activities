const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name:'
    },
    {
        type: 'input',
        name: 'location',
        message: ''
    }
])