const dataManager = require("./dataManager");
const encoder = require("./encoder");
const util = require("./util");
const consoleUI = require("./consoleUI");
const validator = require("./validator");
const accountManager = require("./accountManager");
const blackList = require("./blackList");

class Flow {
    constructor(innerArraysLength, startPage) {
        this.innerArraysLength = innerArraysLength;
        this.startPage = startPage;
    }

    showTransactionsOrPlaces(data, page){
        console.clear();
        consoleUI.viewPlacesOrTransactions(data, page)
                .then((answer) => {
                    if(answer.answer === "Prev"){
                        if(page){
                            this.showTransactionsOrPlaces(
                                data, 
                                page - 1);
                        }
                    } else if(answer.answer === "Next"){
                        if(page + 1 < data.length){
                            this.showTransactionsOrPlaces(
                                data, 
                                page + 1);
                        }
                    } else{
                        console.clear();
                        process.exit();
                    }
                });
    }
    
    login(){
        console.clear();
        consoleUI.login(validator.ValidateEmail, validator.ValidatePassword)
                .then((answer) => {
                    if(blackList.blockedCheck(answer.email)){
                        this.loginError(answer.email);
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
                        this.accountInfo(account);
                    } else{
                        if(!blackList.inputMail(answer.email)){
                            this.loginError(answer.email);
                            return;
                        }
                        this.loginError(answer.email);
                    }
                });
    }
    
    
    loginError(email){
        console.clear();
        consoleUI.loginError(email)
                .then((answer) => {
                    if(answer.answer === "Try again"){
                        this.login();
                    } else{
                        console.clear();
                        process.exit();
                    }
                });
    }
    
    start(){
        console.clear();
        consoleUI.enter().then((answer) => {
            if(answer.answer === "Log in"){
                this.login();
            }
            else{
                this.showTransactionsOrPlaces(        
                util.arrayToArrayOfArrays(
                    dataManager.readPlacesData().places,
                    this.innerArraysLength
                ), 
                this.startPage);
            }
        });
    }
    
    accountInfo(account){
        console.clear();
        consoleUI.accountInfo(account)
                .then((answer) => {
                    if(answer.answer === "Show transactions"){
                        this.showTransactionsOrPlaces(
                            util.transactionsToString(
                                account.transaction, 
                                this.innerArraysLength), 
                            this.startPage);
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
                        this.start();
                    }
                });
    }
}

new Flow(5,0).start();
