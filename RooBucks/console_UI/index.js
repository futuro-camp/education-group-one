const inquirer = require('inquirer');

function displayEntry() {
    return inquirer.prompt({
        type: "list",
        name: "choosedOption",
        prefix: "",
        message: "Select an option:",
        choices: [
            {
                name: "View Account",
                value: 0
            },
            {
                name: "View Locations",
                value: 1
            }
        ]
    });
}

function displayList(data, currentPage) {
    console.clear();
    let choices = [];
    if(currentPage === 0){
        if(data.length > 1)
            choices = [{
                name: "Next page",
                value: 1
            },
            {
                name: "Exit",
                value: 2
            }]
        else
            choices = [{
                name: "Exit",
                value: 2
            }]
    }
    else if(currentPage === data.length-1)
        choices = [{
            name: "Prev page",
            value: 0
        },
        {
            name: "Exit",
            value: 2
        }]
    else
        choices = [{
            name: "Prev page",
            value: 0
        },
        {
            name: "Next page",
            value: 1
        },
        {
            name: "Exit",
            value: 2
        }]
    return inquirer.prompt({
        type: "list",
        name: "choosedOption",
        message: "\n"+data[currentPage].join("\n"),
        prefix: "",
        choices: choices,
    });
}

function displayLogin(emailValidationFunction, passwordValidationFunction) {
    console.clear();
    return inquirer.prompt([
        {
            type: "input",
            name: "email",
            message: "Input E-Mail adress:",
            validate: emailValidationFunction,
            prefix: ""
        },
        {
            type: "password",
            name: "password",
            mask: '*',
            message: "Input password:",
            validate: passwordValidationFunction,
            prefix: ""
        }
    ]);
}

function displayInvalidLogin(message) {
    console.clear();
    return inquirer.prompt({
        type: "list",
        message: message,
        name: "choosedOption",
        prefix: "",
        choices: [{
            name: "Login again",
            value: 0
        },
        {
            name: "Exit",
            value: 0
        }]
    })
}

function displayAccount(accountData) {
    console.clear();
    return inquirer.prompt({
        type: "list",
        name: "choosedOption",
        message: "\nUser email: " + accountData.email + "\n" + "Curent RooBucks quantity: " + accountData.money,
        prefix: "",
        choices: [
            {
                name: "View Transactions",
                value: 0
            },
            {
                name: "Logoff",
                value: 1
            }
        ]
    });
}

module.exports = { displayEntry, displayList, displayLogin ,displayAccount, displayInvalidLogin };