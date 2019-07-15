const readLine = require("readline");
const BankManager = require("./callback_logic");
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
                this.bank.getList((resp) => { this.getListCallback(resp); });
            }
            else if(answear.toLowerCase() === "get") {
                rl.question("Input account id: ", (answear) => {
                    if(Number(answear)){
                        this.bank.get(Number(answear), (error, resp) => { this.getCallback(error, resp); });
                    }
                });
            }
            else if(answear.toLowerCase() === "t") {
                let from, to, money;
                rl.question("Input first id: ", (firstId) => {
                    if(Number(firstId)) {
                        from = Number(firstId); 
                        rl.question("Input second id: ", (secondId) => {
                            if(Number(secondId)) {
                                to = Number(secondId); 
                                rl.question("Input transacton money amount: ", (moneyAmount) => {
                                    if(Number(moneyAmount)) {
                                        money = Number(moneyAmount); 
                                        this.bank.transfer(from, to, money, (error, resp) => { this.transferCallback(error, resp); });
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

    getListCallback(error, info) {
        if(!error) {
            console.log(info);
        }
        else {
            console.log(error);
        }
        this.getCommand();
    }

    getCallback(error, info) {
        if(!error) {
            console.log(info);
        }
        else {
            console.log(error);
        }
        this.getCommand();
    }

    transferCallback(error, info) {
        if(!error) {
            let result = "";
            result += "---------------------------------\n";
            result += "account with id:" + info.from + " transfers to account with id: " + info.to + " " + info.moneyAmount + " ghriven\n";
            result += "---------------------------------\n";
            console.log(result);
        }
        else {
            console.log(error);
        }
        this.getCommand();
    }

    start() {
        this.getCommand();
    }
}

new Instance().start();
