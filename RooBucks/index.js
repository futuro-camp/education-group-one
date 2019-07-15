const dataManager = require("./dataManager");
const encoder = require("./encoder");
const util = require("./util");
const consoleUI = require("./consoleUI");
const validator = require("./validator");
const accountManager = require("./accountManager");
const blackList = require("./blackList");
const innerArraysLength = 5;
const startPage = 0;

function showTransactionsOrPlaces(data, page){
    console.clear();
    consoleUI.viewPlacesOrTransactions(data, page)
            .then((answer) => {
                if(answer.answer === "Prev"){
                    if(page){
                        showTransactionsOrPlaces(
                            data, 
                            page - 1);
                    }
                } else if(answer.answer === "Next"){
                    if(page + 1 < data.length){
                        showTransactionsOrPlaces(
                            data, 
                            page + 1);
                    }
                } else{
                    console.clear();
                    process.exit();
                }
            });
}

function accountInfo(account){
    console.clear();
    consoleUI.accountInfo(account)
            .then((answer) => {
                if(answer.answer === "Show transactions"){
                    showTransactionsOrPlaces(
                        util.transactionsToString(
                            account.transaction, 
                            innerArraysLength), 
                        startPage);
                } else{
                    dataManager.writeAccountsData(
                        encoder.encode(
                            accountManager.accountWrite(
                                encoder.decode(
                                    dataManager.readAccountsData()
                                ),
                                account
                            )
                        )
                    );
                    start();
                }
            });
}

function login(){
    loginQuestion();
}

function loginQuestion(){
    console.clear();
    consoleUI.login(validator.ValidateEmail, validator.ValidatePassword)
            .then((answer) => {
                if(blackList.blockedCheck(answer.email)){
                    loginError(answer.email);
                    return;
                }
                let account = accountManager.accountCheck(
                    encoder.decode(
                        dataManager.readAccountsData()
                    ), 
                    answer.email, 
                    answer.password);
                if(account){
                    blackList.removeFromInput(answer.email);
                    accountInfo(account);
                } else{
                    if(!blackList.inputMail(answer.email)){
                        loginError(answer.email);
                        return;
                    }
                    loginError(answer.email);
                }
            });
}

function loginError(email){
    console.clear();
    consoleUI.loginError(email)
            .then((answer) => {
                if(answer.answer === "Try again"){
                    login();
                } else{
                    console.clear();
                    process.exit();
                }
            });
}

function start(){
    console.clear();
    consoleUI.enter().then((answer) => {
        if(answer.answer === "Log in"){
            login();
        }
        else{
            showTransactionsOrPlaces(        
            util.arrayToArrayOfArrays(
                dataManager.readPlacesData().places,
                innerArraysLength
            ), 
            startPage);
        }
    });
}

start();
