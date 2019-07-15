const readline = require("./ReadLine.js");
const BankManager = require("./BankManager.js");

let manager = new BankManager();
manager.addAccount("danya", "aynad", 169);
manager.addAccount("vasya", "aysav", 288);
manager.addAccount("petya", "ayrep", 1654);
manager.addAccount("kolya", "aylok", 4894);
manager.addAccount("miha", "ahim", 9413);

function callback(){
    callback();
}

function continueCallback(){
    readline.question("Press any key to continue: ", 
    function(){
        callback();
    });
}

function callback(){
    console.clear();
    readline.question("List of commands:\n'Get List' - return all available accounts;\n'Get #' - get account, where # - account id;\n'Transfer # @ $' - transfer, where # - id from, @ - id where, $ - amount of money;\n", 
    function(answer){
        if(answer.includes("Get")){
            let ar = answer.split(" ");
            if(ar.length !== 2){
                console.log("No such command!");
                continueCallback();
            }
            else if(ar[1].toLowerCase() === "list"){
                manager.getList(function(error, data){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log(data);
                    }
                    continueCallback();
                });
            }
            else {
                manager.get(ar[1], function(error, data){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log(data);
                    }
                    continueCallback();
                });
            }
        }
        else if(answer.includes("Transfer")){
            let ar = answer.split(" ");
            if(ar.length !== 4){
                console.log("No such command!");
                continueCallback();
            }
            else{
                manager.transfer(ar[1], ar[2], Number(ar[3]), function(error, data){
                    if(error){
                        console.log(error);
                    }
                    else {
                        console.log(data);
                    }
                    continueCallback();
                });  
            }
        }
        else{
            console.log("No such command!");
            continueCallback();
        }
    });
}

module.exports = callback;