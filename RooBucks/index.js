const dataManager = require("./data_manager");
const encoder = require("./encoder");
const util = require("./util");
const consoleUi = require("./console_UI");
const validator = require("./validator");
const accountManager = require("./account_manager");
const blackList = require("./blacklist");

function start() {
    console.clear();
    consoleUi.displayEntry().then((answer) => {
        if(answer.choosedOption === 0) {
            login();
        } else {
            listDisplay(util.arraySplit(JSON.parse(dataManager.readLocationData()).places), 0);
        }
    });
}

function exit() {
    console.clear();
    process.exit();
}

function login() {
    consoleUi.displayLogin(validator.emailValidate, validator.passwordValidate).then((answer) => {
        if(blackList.blackListValidate()) {
            let accountData = accountManager.getUser(answer, JSON.parse(encoder.decode(dataManager.readAccoutsData())).accounts);
            if(accountData.isLoginSuccesfull) {
                blackList.blackListRemove(answer.email);
                consoleUi.displayAccount(accountData.data).then((answer) => {
                    if(answer.choosedOption === 0) {
                        listDisplay(util.transactionsToArray(accountData.data.transaction), 0);
                    }
                    else {
                        exit();
                    }
                });
            }
            else {
                consoleUi.displayInvalidLogin(accountData.data).then((answer) => {
                    blackList.blackListCheck(answer.email);
                    if(answer.choosedOption === 0) {
                        login();
                    }
                    else {
                        exit();
                    }
                });
            }
        }
        else {
            consoleUi.displayInvalidLogin(`\nInvalid Email address and/or Password for user: ${answer.email}\nOr you may have exceeded the number of consecutive attempts allowed`).then((answer) => {
                if(answer.choosedOption === 0) {
                    login();
                }
                else {
                    exit();
                }
            });
        }
    });
}

function listDisplay(data, currentPage) {
    consoleUi.displayList(data, currentPage).then((answer) => {
        if(answer.choosedOption === 0) 
            listDisplay(data, currentPage - 1);
        else if(answer.choosedOption === 1)
            listDisplay(data, currentPage + 1);
        else
            exit();
    });
}

start();