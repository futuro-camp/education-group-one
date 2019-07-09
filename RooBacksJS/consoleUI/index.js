// calling console UI library
    var inquirer = require('inquirer');

// Creatimg choices between LOGin and VIEW Location's places
    function entry(){
        console.clear();
        return inquirer
        .prompt({
            message: '\nHello! You are welcomed by the system RooBacks. What option you want to choose: ',
            name: 'choose',
            type: 'list',
            prefix: '',
            choices: [
            {
                type: 'separator',
                message: '\n '
            },
            {
                name: 'View Account',
                value: 0
            },
            {
                type: 'separator'
            },
            {
                name: 'View Locations',
                value: 1
            },
            {
                type: 'separator'
            },
        ]
        })
    }

// LOG-in scenario
    function signIn(check, checkP){
        console.clear();
        return inquirer
        .prompt([
                    {
                        message:'Please enter your Email',
                        prefix: '',
                        name: 'email',
                        type: 'input',
                        validate: check
                    },
                    {
                        message:'Please enter your Password',
                        prefix: '',
                        name: 'password',
                        type: 'password',
                        mask: '#',
                        validate: checkP
                    }
                ])
    }

//function which will console.log every place per one page
function creatingPagesView(element){
    for (let i = 0; i < element.length; i++) {
        console.log(element[i]);
    }
}
//
function errorLogin(email){
    console.clear();
    return inquirer
    .prompt([{
        type:'list',
        name: 'answer',
        message: `Invalid Email Address and / or Password for ${email}. Or you may have exceeded the number of consecutive attempts allowed.`,
        prefix: '',
        choices: ["Try to Login again?", "Exit"]
    }])
}

// VIEW Locations scenario
    function viewLocationList(list, x){
        let choices = [];
        if(x===0){
            if(list.length<=4){
                choices = [{type: 'separator', message: '\n'},{name: 'exit', value: 2},{type: 'separator'}];
            }
            else {
                choices = [{type: 'separator', message: '\n'},{name:'next', value: 1},{type: 'separator'},{name: 'exit', value: 2},{type: 'separator'}];
            }
        }
        else if(x===list.length-1){
            choices = [{type: 'separator', message: '\n'},{name:'prev', value: 0},{type: 'separator'},{name: 'exit', value: 2},{type: 'separator'}];
        }
        else {
            choices = [{type: 'separator', message: '\n'},{name:'prev', value: 0},{type: 'separator'},{name:'next', value: 1},{type: 'separator'},{name: 'exit', value: 2},{type: 'separator'}];
        }
        creatingPagesView(list[x]);
        return inquirer
        .prompt ([
            {
                type: 'list',
                prefix: '',
                name: 'Locations',
                message: ' ',
                suffix: '',
                choices: choices
            }
        ])
    }
// VIEW Transactions scenario
    function viewTransactionsList(list, x){
        let choices = [];
        if(x===0){
            if(list.length<=3){
                choices = [{name: 'exit', value: 2}];
            }
            else {
                choices = [{type: 'separator'},{name:'next', value: 1},{type: 'separator'},{name: 'exit', value: 2},{type: 'separator'}];
            }
        }
        else if(x===list.length-1){
            choices = [{type: 'separator'},{name:'prev', value: 0},{type: 'separator'},{name: 'exit', value: 2},{type: 'separator'}];
        }
        else {
            choices = [{type: 'separator'},{name:'prev', value: 0},{type: 'separator'},{name:'next', value: 1},{type: 'separator'},{name: 'exit', value: 2},{type: 'separator'}];
        }
        list.forEach(element => {
            console.log(element);
        });
        return inquirer
        .prompt ([
            {
                type: 'list',
                prefix: '',
                name: 'Transactions',
                message: ' ',
                suffix: '',
                choices: choices
            }
        ])
    }

    function viewTransactionList(array){
        let transactionList = array[0].map(element => {
            return `Transaction value: ${element.value}$, place: ${element.place}, date: ${element.date}`;
        })
        return transactionList;
        // console.log(transactionList);
    }

    function accountInfo(user){
        console.clear();
        return inquirer
        .prompt([{
            name: 'info',
            type: 'list',
            message: `\nYour login: ${user.email}\nYour money balance is: ${user.money}$\n`,
            choices: ["View Transactions History","LoggOff"],
            prefix: ''
        }])
    }

    module.exports = {entry, signIn, accountInfo, viewLocationList, viewTransactionList, viewTransactionsList, errorLogin};