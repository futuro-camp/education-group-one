const inquirer = require("inquirer");

function enter(){
    return inquirer.prompt([{
            type: "list",
            name: "answer",
            message: "Choose operation: ",
            choices: ["Log in", "View List"], 
            prefix: ""
    }]);
}

function viewPlacesOrTransactions(data, page){
    let choices = ["Prev", "Next", "Exit"];
    if(!page){
        choices.shift();
    }
    if(page === data.length - 1){
        choices.splice(choices.indexOf("Next"), 1);
    }
    return inquirer.prompt([{
        type: "list",
        name: "answer",
        message: `\n${data[page].join("\n")}\n`,
        prefix: "",
        choices
        }]);
}

function login(mailValidation, passwordValidation){
    return inquirer.prompt([{
            type: "input",
            name: "email",
            message: "Enter your e-mail: ",
            prefix: "",
            validate: mailValidation
        },{
            type: "password",
            mask: "*",
            name: "password",
            message: "Enter your password: ",
            prefix: "",
            validate: passwordValidation
        }]);
}

function loginError(email){
    return inquirer.prompt([{
        type: "list",
        name: "answer",
        message: `Invalid Email Address and / or Password for ${email}. Or you may have exceeded the number of consecutive attempts allowed.`,
        choices: ["Try again", "Exit"],
        prefix: "" 
    }]);
}

function accountInfo(account){
    return inquirer.prompt([{
        type: "list",
        name: "answer",
        message: `\nEmail: ${account.email}\nBalance: ${account.money}\n`,
        choices: ["Show transactions", "Log off"],
        prefix: "" 
    }]);
}

module.exports = {enter, viewPlacesOrTransactions, login, loginError, accountInfo};