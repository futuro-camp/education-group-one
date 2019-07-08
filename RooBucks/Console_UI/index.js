const inquirer = require('inquirer');

function displayEntry(callback) {
    inquirer.prompt({
        type: "list",
        name: "chosedOption",
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
    }).then(callback);
}

function displayList(data, currentPage, exitFunction) {
    console.clear();
    let choices = [];
    if(currentPage === 0) 
        choices = [{
            name: "Next page",
            value: 1
        },
        {
            name: "Exit",
            value: 2
        }]
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
    inquirer.prompt({
        type: "list",
        name: "choosedOption",
        message: data[currentPage].join("\n"),
        prefix: "",
        choices: choices,
    }).then(function (answer){
        if(answer.choosedOption === 0) 
            displayPlaces(data, currentPage-1, exitFunction);
        else if(answer.choosedOption === 1)
            displayPlaces(data, currentPage+1, exitFunction);
        else 
            exitFunction();
    })
}

function displayLogin(validationFunction, accountCheck) {
    inquirer.prompt([
        {
            type: "input",
            name: "email",
            message: "Input E-Mail adress:",
            validate: validationFunction,
            prefix: ""
        },
        {
            type: "password",
            name: "password",
            message: "Input password:"
        }
    ]).then(accountCheck(answer));
}

function displayAccount(accountData, exitFunction) {
    inquirer.prompt({
        type: "list",
        name: "choosedOption",
        message: "User email: " + accountData.email + "\n" + "Curent RooBucks quantity: " + accountData.money + "\n",
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
    }).then(function(answer) {
        exitFunction(answer);
    });
}

module.exports = { displayEntry, displayList, displayLogin ,displayAccount };