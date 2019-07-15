const readline = require("./ReadLine.js");
const BankManager = require("./BankManager.js");

let manager = new BankManager();
manager.addAccount("danya", "aynad", 169);
manager.addAccount("vasya", "aysav", 288);
manager.addAccount("petya", "ayrep", 1654);
manager.addAccount("kolya", "aylok", 4894);
manager.addAccount("miha", "ahim", 9413);

class Callback {
    constructor(manager) {
        this.manager = manager;
    }

    continueCallback(){
        readline.question("Press any key to continue: ", 
        () => {
            this.callback();
        });
    }

    callback(){
        console.clear();
        readline.question("List of commands:\n'Get List' - return all available accounts;\n'Get #' - get account, where # - account id;\n'Transfer # @ $' - transfer, where # - id from, @ - id where, $ - amount of money;\n", 
        (answer) => {
            if(answer.includes("Get")){
                let ar = answer.split(" ");
                if(ar.length !== 2){
                    console.log("No such command!");
                    this.continueCallback();
                }
                else if(ar[1].toLowerCase() === "list"){
                    this.manager.getList((error, data) => {
                        if(error){
                            console.log(error);
                        }
                        else{
                            console.log(data);
                        }
                        this.continueCallback();
                    });
                }
                else {
                    this.manager.get(ar[1], (error, data) => {
                        if(error){
                            console.log(error);
                        }
                        else{
                            console.log(data);
                        }
                        this.continueCallback();
                    });
                }
            }
            else if(answer.includes("Transfer")){
                let ar = answer.split(" ");
                if(ar.length !== 4){
                    console.log("No such command!");
                    this.continueCallback();
                }
                else{
                    manager.transfer(ar[1], ar[2], Number(ar[3]), (error, data) => {
                        if(error){
                            console.log(error);
                        }
                        else {
                            console.log(data);
                        }
                        this.continueCallback();
                    });  
                }
            }
            else{
                console.log("No such command!");
                this.continueCallback();
            }
        });
    }
}

module.exports = new Callback(manager);