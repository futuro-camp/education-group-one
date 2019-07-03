const readLine = require("readline");
const bankManager = require("./promise_logic");
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
            bank.GetList().then(getListCallback).catch((error) => {console.log(error)});
        }
        else if(answear.toLowerCase()=="get") {
            rl.question("Input account id: ", (answear) => {
                if(Number(answear)){
                    bank.Get(answear).then(getCallback).catch((error) => {console.log(error)});
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
                            rl.question("Input transacton amount: ", (moneyAmount) => {
                                if(Number(moneyAmount)) {
                                    money = Number(moneyAmount); 
                                    bank.Transfer(from, to, money).then(transferCallback).catch((error) => {console.log(error)});
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

function getListCallback(info) {
    console.log(info);
    GetCommand();
}

function getCallback(info) {
    let result = "";
    result+="---------------------------------\n";
    result+= "id:"+info.id+" money:"+info.money+" owner:"+info.owner.ownerName+" "+info.owner.ownerSurname+"\n";
    result+="---------------------------------\n";
    console.log(result);
    GetCommand();
}

function transferCallback(info) {
    let result = "";
    result+="---------------------------------\n";
    result+= "account with id:"+info.from+" transfers to account with id:"+info.to+" "+info.moneyAmount+" ghriven\n";
    result+="---------------------------------\n";
    console.log(result);
    GetCommand();
}

Start();
