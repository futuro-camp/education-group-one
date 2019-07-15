// calling console UI library
    var inquirer = require("inquirer");

// Creatimg choices between LOGin and VIEW Location"s places
    function entry(){
        console.clear();
        return inquirer
        .prompt({
            message: "\nHello! You are welcomed by the system RooBacks. What option you want to choose: ",
            name: "choose",
            type: "list",
            prefix: "",
            choices: [
            {
                type: "separator",
                message: "\n "
            },
            {
                name: "View Account",
                value: 0
            },
            {
                type: "separator"
            },
            {
                name: "View Locations",
                value: 1
            },
            {
                type: "separator"
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
                        message:"Please enter your Email",
                        prefix: "",
                        name: "email",
                        type: "input",
                        validate: check
                    },
                    {
                        message:"Please enter your Password",
                        prefix: "",
                        name: "password",
                        type: "password",
                        mask: "#",
                        validate: checkP
                    }
                ])
    }


// function which offers user to RElogin of quit
function errorLogin(email){
    console.clear();
    return inquirer
    .prompt([{
        type:"list",
        name: "answer",
        message: `Invalid Email Address and / or Password for ${email}. Or you may have exceeded the number of consecutive attempts allowed.`,
        prefix: "",
        choices: ["Try to Login again?", "Exit"]
    }]);
}
//function which will console.log every place per four on page
function creatingPagesView(element){
    for (let i = 0; i < element.length; i++) {
        console.log(element[i]);
    }
}
// VIEW Locations scenario
    function viewLocationList(list, x){
        let choices = [];
        if(x===0){
            if(list.length<2){
                choices = [{type: "separator", message: "\n"},{name: "exit", value: 2},{type: "separator"}];
            }
            else {
                choices = [{type: "separator", message: "\n"},{name:"next", value: 1},{type: "separator"},{name: "exit", value: 2},{type: "separator"}];
            }
        }
        else if(x===list.length-1){
            choices = [{type: "separator", message: "\n"},{name:"prev", value: 0},{type: "separator"},{name: "exit", value: 2},{type: "separator"}];
        }
        else {
            choices = [{type: "separator", message: "\n"},{name:"prev", value: 0},{type: "separator"},{name:"next", value: 1},{type: "separator"},{name: "exit", value: 2},{type: "separator"}];
        }
        creatingPagesView(list[x]);
        return inquirer
        .prompt ([
            {
                type: "list",
                prefix: "",
                name: "Locations",
                message: " ",
                suffix: "",
                choices: choices
            }
        ])
    }

//function which will console.log every transaction per four on page
    function creatingTransactionsPagesView(element){
        for (let i = 0; i < element.length; i++) {
            console.log(element[i]);
        }
    }
// VIEW Transactions scenario
    function viewTransactionsList(list, x){
        let choices = [];
        if(x===0){
            if(list.length<2){
                choices = [{name: "exit", value: 2}];
            }
            else {
                choices = [{type: "separator"},{name:"next", value: 1},{type: "separator"},{name: "exit", value: 2},{type: "separator"}];
            }
        }
        else if(x===list.length-1){
            choices = [{type: "separator"},{name:"prev", value: 0},{type: "separator"},{name: "exit", value: 2},{type: "separator"}];
        }
        else {
            choices = [{type: "separator"},{name:"prev", value: 0},{type: "separator"},{name:"next", value: 1},{type: "separator"},{name: "exit", value: 2},{type: "separator"}];
        }
        creatingTransactionsPagesView(list[x]);
        return inquirer
        .prompt ([
            {
                type: "list",
                prefix: "",
                name: "Transactions",
                message: " ",
                suffix: "",
                choices: choices
            }
        ]);
    }

    function transactionsToString(array){
            let transactionList = array.map((page) => {
                return page.map((obj) => {
                    let dateString = new Date(Date.parse(obj.date)).toLocaleString(
                        {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        });
                    let valueString = obj.value>0 ? `Arrival: ${obj.value}`:`Spent: ${-obj.value}`;
                    return `${valueString}, ${obj.place}, ${dateString}`;
                })
            });
        return transactionList;
    }

    function accountInfo(user){
        console.clear();
        return inquirer
        .prompt([{
            name: "info",
            type: "list",
            message: `\nYour login: ${user.email}\nYour money balance is: ${user.money}$\n`,
            choices: ["View Transactions History","LoggOff"],
            prefix: ""
        }]);
    }

    module.exports = {entry, signIn, accountInfo, viewLocationList, transactionsToString, viewTransactionsList, errorLogin};