const Account = require("./Account.js");

class PromiseBankManager{
    constructor(){
        this.accounts = [];
    }

    addAccount(name, surname, money){
        this.accounts.push(new Account(this.accounts.length, money, name, surname));
    }

    getList(){
        var accounts = this.accounts;
        return new Promise(function(resolve, reject){
            setTimeout(function() {
                if(accounts.length > 0){
                    resolve(accounts.map((account) => `id: ${account.id} name: ${account.owner.name} surname: ${account.owner.surname} money: ${account.money}`));
                }
                else{
                    reject("No accounts in the list");
                }
            }, 2000);
        });
    }

    get(id){
        var accounts = this.accounts;
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                if(accounts[id]){
                    resolve(accounts[id]);
                }
                else{
                    reject("No such account in the list");
                }
            }, 1000);
        });
    }

    transfer(from, to, amount){
        var accounts = this.accounts;
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                if(accounts[from] && accounts[to]){
                    if(accounts[from].money >= amount){
                        accounts[from].money -= amount;
                        accounts[to].money += amount;
                        resolve("Transfer comlete!");
                    }
                    else{
                        reject("Not enough money!");
                    }
                }
                else{
                    reject("No such account in the list");
                }
            }, 3000);    
        });
    }
}

module.exports = PromiseBankManager;