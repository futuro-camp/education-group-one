const Account = require('./Account.js');

class BankManager {
    constructor() 
    {
        this.accounts = [];
    }

    AddAccount(name, surname, money) {
        this.accounts.push(new Account(this.accounts.length, money, name, surname));
    }

    GetList(callback) {
        var accounts = this.accounts;
        setTimeout(function() {
            if(accounts.length > 0)
            {
                callback(accounts.map(account => `id: ${account.id} name: ${account.owner.name} surname: ${account.owner.surname} money: ${account.money}`));
            }
            else
                callback('No accounts in the list');
        }, 2000);
    }

    Get(id, callback) {
        let accounts = this.accounts;
        setTimeout(() => {
            if(accounts[id] != undefined)
                callback(this.accounts[id]);
            else
                callback('No such account in the list');
        }, 1000);
    }

    Transfer(from, to, amount, callback) {
        let accounts = this.accounts;
        setTimeout(() => {
            if(accounts[from] != undefined && accounts[to] != undefined)
            {
                if(accounts[from].money >= amount)
                {
                    accounts[from].money -= amount;
                    accounts[to].money += amount;
                    callback('Transfer comlete!');
                }
                else
                {
                    callback('Not enough money!');
                }
            }
            else
            {
                callback('No such account in the list');
            }
        }, 3000);    
    }
}

module.exports = BankManager;