const readline = require("./ReadLine.js");
const PromiseBankManager = require("./PromiseBankManager.js");

let managerPromise = new PromiseBankManager();
managerPromise.addAccount("danya", "aynad", 169);
managerPromise.addAccount("vasya", "aysav", 288);
managerPromise.addAccount("petya", "ayrep", 1654);
managerPromise.addAccount("kolya", "aylok", 4894);
managerPromise.addAccount("miha", "ahim", 9413);

class Flow {
    constructor(manager)
    {
        this.manager = manager;
    }

    continuePromise(){
        readline.question("Press any key to continue: ", 
        () => {
            this.startPromise();
        });
    }
    
    startPromise(){
        console.clear();
        readline.question("List of commands:\n'Get List' - return all available accounts;\n'Get #' - get account, where # - account id;\n'Transfer # @ $' - transfer, where # - id from, @ - id where, $ - amount of money;\n", 
        (answer) => { 
            if(answer.includes("Get")){
                let ar = answer.split(" ");
                if(ar.length !== 2){
                    console.log("No such command!");
                    this.continuePromise();
                }
                else if(ar[1].toLowerCase() === "list"){
                    this.manager.getList().then((a) => {
                        console.log(a);
                    }).catch((error) => {
                        console.log(error);
                    }).then(() => { this.continuePromise(); });
                }
                else{
                    this.manager.get(ar[1]).then((a) => {
                        console.log(a);
                    }).catch((error) => {
                        console.log(error);
                    }).then(() => { this.continuePromise(); });  
                }
            }
            else if(answer.includes("Transfer")){
                let ar = answer.split(" ");
                if(ar.length !== 4){
                    console.log("No such command!");
                    this.continuePromise();
                }
                else{
                    this.manager.transfer(ar[1], ar[2], Number(ar[3])).then((a) => {
                        console.log(a);
                    }).catch((error) => {
                        console.log(error);
                    }).then(() => { this.continuePromise(); });            
                }
            }
            else{
                console.log("No such command!");
                this.continuePromise();
            }
        });
    }
}

module.exports = new Flow(managerPromise);