// Import moduls

// const accountManager = require('./accountManager/index');

const dataManager = require('./dataManager/index');

// const encoder = require('./encoder/index');

const utilities = require('./utilities/index');

const validator = require('./validator/index');

const consoleUI = require('./consoleUI');

function login(){
    consoleUI.signIn(validator.checkEmail, validator.checkPassword)
    .then(answer => {
        let accountsList = dataManager.readAccounts();
        let user;
        accountsList = JSON.parse(accountsList);
        accountsList.accounts.forEach(element => {
            if (element.email === answer.email && element.password === answer.password){
                user = element;
            }
        });
        if (user){
            consoleUI.accountInfo(user)
            .then(answer => {
                if(answer.info === "View Transactions History"){
                    let transactionList = utilities.creatingPagesLocations(user.transaction);
                    console.clear();
                    const schedule = consoleUI.viewTransactionList(transactionList);
                    // console.log(schedule);
                    // consoleUI.viewTransactionsList(schedule, 0);
                    showTransactions(schedule, 0);
                }
                else {
                    exit();
                }
            })
        }
        else {
            consoleUI.errorLogin(answer.email)
            .then(answer => {
                if(answer.answer === "Try to Login again?"){
                    login();
                }
                else {
                    exit();
                }
            })
        }
    })
}

function showTransactions(list, x) {
    console.clear();
    // console.log('');
    consoleUI.viewTransactionsList(list, x)
    .then(answer => {
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
    // console.log('');
    consoleUI.viewLocationList(pages, x)
    .then(answer => {
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

function launch(){
    consoleUI.entry()
    .then(answer => {
        if (answer.choose === 0){
            login();
        } else {
            let locationsList = dataManager.readLocations();
            locationsList = JSON.parse(locationsList);
            let pages = utilities.creatingPagesLocations(locationsList.places);
            showLocation(pages, 0);
        }
    })
    .then()
}

function exit(){
    console.clear();
    console.log('\nSee you later!\n');
    process.exit();
}

launch();
