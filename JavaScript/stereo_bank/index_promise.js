const readLine = require("readline");
const BankManager = require("./promise_logic");
const Account = require("./account_logic");

const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

class Instance {
    constructor() {
        this.bank = new BankManager([ new Account(1, 250, "Alexey", "Petrenko"), new Account(2, 80000, "Anatoliy", "Vaserman"), new Account(3, 2500, "Grigoriy", "Skovoroda"), new Account(4, 80, "Sjul", "Vern")]);
    }

    getCommand() {
        rl.question("Command list:\nGL - get list,\nGET - get account by id,\nT- transfer from one to another account\nInsert command: ", (answear) => {
            if(answear.toLowerCase() === "gl") {
                this.bank.getList().then((info) => { this.getListCallback(info) }).catch((error) => console.log(error));
            }
            else if(answear.toLowerCase() === "get") {
                rl.question("Input account id: ", (answear) => {
                    if(Number(answear)){
                        this.bank.get(Number(answear)).then((info) => { this.getCallback(info) }).catch((error) => console.log(error));
                    }
                })
            }
            else if(answear.toLowerCase() === "t") {
                let from, to, money;
                rl.question("Input first id: ", (firstId) => {
                    if(Number(firstId)) {
                        from = Number(firstId); 
                        rl.question("Input second id: ", (secondId) => {
                            if(Number(secondId)) {
                                to = Number(secondId); 
                                rl.question("Input transacton amount: ", (moneyAmount) => {
                                    if(Number(moneyAmount)) {
                                        money = Number(moneyAmount); 
                                        this.bank.transfer(from, to, money).then((info) => { this.transferCallback(info) }).catch((error) => console.log(error));
                                    }
                                    else {
                                        this.getCommand();
                                    }
                                });
                            }
                            else {
                                this.getCommand();
                            }
                        });
                    }
                    else {
                        this.getCommand();
                    }
                });
            }
            else {
                console.log("Invalid command");
                this.getCommand();
            }
        });
    }

    getListCallback(info) {
        console.log(info);
        this.getCommand();
    }

    getCallback(info) {
        let result = "";
        result += "---------------------------------\n";
        result += "id:" + info.id + " money: " + info.money + " owner: " + info.owner.ownerName + " " + info.owner.ownerSurname + "\n";
        result += "---------------------------------\n";
        console.log(result);
        this.getCommand();
    }

    transferCallback(info) {
        let result = "";
        result += "---------------------------------\n";
        result += "account with id:" + info.from + " transfers to account with id:" + info.to + " "+ info.moneyAmount + " ghriven\n";
        result += "---------------------------------\n";
        console.log(result);
        this.getCommand();
    }

    start() {
        this.getCommand();
    }   
}

new Instance().start();
