const readLine = require("readline");
const bankManager = require("./callback_logic");
const account = require("./account_logic");

const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

var bank;

function Start() {
    bank = new bankManager([ new account(1, 250, "Alexey", "Petrenko"), new account(2, 80000, "Anatoliy", "Vaserman"), new account(3, 2500, "Grigoriy", "Skovoroda"), new account(4, 80, "Sjul", "Vern")]);
    GetCommand();
}

function GetCommand() {
    rl.question("Command list:\nGL - get list,\nGET - get account by id,\nT- transfer from one to another account\nInsert command: ", (answear) => {
        if(answear.toLowerCase()=="gl") {
            bank.GetList(getListCallback);
        }
        else if(answear.toLowerCase()=="get") {
            rl.question("Input account id: ", (answear) => {
                if(Number(answear)){
                    bank.Get(answear, getCallback);
                }
            })
        }
        else if(answear.toLowerCase()=="t") {
            let from, to, money;
            rl.question("Input first id: ", (firstId) => {
                if(Number(firstId)) {
                    from = firstId; 
                    rl.question("Input second id: ", (secondId) => {
                        if(Number(secondId)) {
                            to = secondId; 
                            rl.question("Input transacton money amount: ", (moneyAmount) => {
                                if(Number(moneyAmount)) {
                                    money = Number(moneyAmount); 
                                    bank.Transfer(from, to, money, transferCallback);
                                }
                                else {
                                    GetCommand();
                                }
                            })
                        }
                        else {
                            GetCommand();
                        }
                    })
                }
                else {
                    GetCommand();
                }
            })
        }
        else {
            console.log("Invalid command");
            GetCommand();
        }
    });
}

function getListCallback(error, info) {
    if(error == undefined) {
        console.log(info);
    }
    else {
        console.log(error);
    }
    GetCommand();
}

function getCallback(error, info) {
    if(error == undefined) {
        let result = "";
        result+="---------------------------------\n";
        result+= "id:"+info.id+" money:"+info.money+" owner:"+info.owner.ownerName+" "+info.owner.ownerSurname+"\n";
        result+="---------------------------------\n";
        console.log(result);
    }
    else {
        console.log(error);
    }
    GetCommand();
}

function transferCallback(error, info) {
    if(error == undefined) {
        let result = "";
        result+="---------------------------------\n";
        result+= "account with id:"+info.from+" transfers to account with id:"+info.to+" "+info.moneyAmount+" ghriven\n";
        result+="---------------------------------\n";
        console.log(result);
    }
    else {
        console.log(error);
    }
    GetCommand();
}

Start();
