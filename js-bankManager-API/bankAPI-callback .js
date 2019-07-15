const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Account {
    constructor(name, money, id){
        this.name=name;
        this.money=money;
        this.id=id;
    }
}
class Acc extends Account{
    constructor(name,money,id){
        super(name);
        this.money=money;
        this.id=id;
    }
}
class Bank {
    constructor(title,arr){
        this.title=title;
        this.bankList=[];
    }
    createAccount(newAccount){
        if(newAccount instanceof Account) {
            this.bankList.push(newAccount);
        }
    }
    getList(cb){
        setTimeout(()=>{
            if (this.bankList.length < 1){
                cb("This BankList is empty",null);
            }
            cb(null,this.bankList);
        }, 3000);
    }
    getId(number,cb){
        setTimeout(() => {
            let identifier = this.bankList.find((Acc) => Acc.id===number);
            if(identifier){
                cb("Account with this id does not exist", null);
                return;
            }
            cb(null,identifier);
        }, 1000);
    }
    transfer(from,to,amount,cb){
        setTimeout(() => {
            let accountF = this.bankList.find((account) => account.id===from);
            let accountT = this.bankList.find((account) => account.id===to);
            if (accountF){
                cb(`Account with id ${from} does not exist`);
                return;
            }
            if (accountT){
                cb(`Account with id ${to} does not exist`);
                return;
            }
            if (accountF.money<amount){
                cb(`Account with id ${from} does not have enough money for this transaction`);
                return;
            }
            this.bankList = this.bankList.map((account) => {
                if(account.id === accountF.id ){
                    return {
                        name: account.name,
                        money: account.money - amount,
                        id: account.id
                    };
                }
                if(account.id === accountT.id){
                    return {
                        name: account.name,
                        money: account.money + amount,
                        id: account.id
                    };
                }
                return account;
            });
            cb(null,this.bankList, amount);
        }, 0);
    }
}
function request() {
    rl.question("Wanna do something else ? Press y/n  \n", (answer) => {
        if(answer==="y"){
            start();
        } else {
            console.log("Have a nice day!");
            process.exit();
        }
    });
}

let Privat = new Bank ("Privat Bank", []);
Privat.createAccount(new Acc("Antony",1200, 1));
Privat.createAccount(new Acc("Volodya",2200,2));
Privat.createAccount(new Acc("Ignatik",3200,3));
Privat.createAccount(new Acc("Kartoshka",4200,4));

function start(){
rl.question ("Hello, we are happy to see you in our BankManager! This is available command list: getList / getId / transfer \n", (answer) => {
    if (answer === "getList"){
        Privat.getList(function(error,list){
                if (error){
                    console.log(error);
                }
                if(list){
                    console.log(list);
                }
                request();
            });
    } else if (answer === "getId"){
        rl.question("Please enter account ID \n", (id) => {
            if(Number(id)){
                Privat.getId(Number(id), function idFinder(err,identifier){
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log(identifier);
                    request();
                });
            } else {
                console.log("Such ID is not defined");
                request();
            }
        });
    }else if (answer === "transfer"){
        rl.question("Please enter account ID which transfer the money \n", (idF) => {
            if (Number(idF)){
                rl.question("Please enter account ID who get the money \n", (idT) => {
                    if (Number(idT)){
                        rl.question("Please enter amount of money \n", (a) => {
                            if (Number(a)){
                                    Privat.transfer(Number(idF),Number(idT),Number(a), function(err, list, transactionAmount){
                                        if (err){
                                            console.log(err);
                                        } else if(list) {
                                            console.log("");
                                            console.log("success transfer " + transactionAmount +"$");
                                            console.log(list);
                                        }
                                        request();
                                    });
                            } else {
                                console.log("Incorrect input amount of money");
                                request();
                            }
                        });
                    } else {
                        console.log("Such ID is not defined");
                    request();
                    }
                });
            } else {
                console.log("Such ID is not defined");
                request();
            }
        });

    } else {
        console.log("Please enter available command");
        start();
    }});
}

start();