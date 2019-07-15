// Import moduls

const accountManager = require("./accountManager/index");

const dataManager = require("./dataManager/index");

const encoder = require("./encoder/index");

const utilities = require("./utilities/index");

const validator = require("./validator/index");

const consoleUI = require("./consoleUI");

function exit(){
    console.clear();
    console.log("\nThanks you for using system RooBucks, based on vanilla JavaScript.:)\n\nHave a nice day!(c) Kharkiv National University of Radio Electronics\n\n\n");
    process.exit();
}

function showTransactions(list, x) {
    console.clear();
    consoleUI.viewTransactionsList(list, x)
    .then((answer) => {
        if(answer.Transactions === 0){
            showTransactions(list, x-1);
        }
        else if(answer.Transactions === 1){
            showTransactions(list, x+1);
        }
        else {
            exit();
        }
    });
}

function showLocation(pages, x) {
    console.clear();
    consoleUI.viewLocationList(pages, x)
    .then((answer) => {
        if(answer.Locations === 0){
            showLocation(pages, x-1);
        }
        else if(answer.Locations === 1){
            showLocation(pages, x+1);
        }
        else {
            exit();
        }
    });
}

function login(){
    consoleUI.signIn(validator.checkEmail, validator.checkPassword)
    .then((answer) => {
        //Проверка на присутствие в бан-листе 3 и более раз
        if(validator.banCheck(answer.email)){
            consoleUI.errorLogin(answer.email)
            .then((answer) => {
                if(answer.answer === "Try to Login again?"){
                    login();
                }
                else {
                    exit();
                }
            });
            return;
        }
        let accountsList = encoder.deCode(dataManager.readAccounts());
        let user = accountManager.checkAccount(accountsList, answer);
        if (user){
            validator.blackListFiltered(user.email);
            consoleUI.accountInfo(user)
            .then((answer) => {
                if(answer.info === "View Transactions History"){
                    let transactionList = utilities.creatingTransactionsPages(user.transaction);
                    console.clear();
                    const schedule = consoleUI.transactionsToString(transactionList);
                    showTransactions(schedule, 0);
                }
                else {
                    exit();
                }
            });
        }
        else {
            // минус попытка входа (неверный пароль)
            validator.addToBan(answer.email);
            consoleUI.errorLogin(answer.email)
            .then((answer) => {
                if(answer.answer === "Try to Login again?"){
                    login();
                }
                else {
                    exit();
                }
            });
        }
    });
}

function launch(){
    // to crypt database
    // dataManager.writeAccounts(encoder.enCode(dataManager.readAccounts()));
    console.clear();
    consoleUI.entry()
    .then((answer) => {
        if (answer.choose === 0){
            login();
        } else {
            let locationsList = dataManager.readLocations();
            locationsList = JSON.parse(locationsList);
            let pages = utilities.creatingPagesLocations(locationsList.places);
            showLocation(pages, 0);
        }
    });
}

launch();
