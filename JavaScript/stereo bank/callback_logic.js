class BankManager {

    constructor(accounts) {
        this.accounts = accounts
    }

    GetList(callback) { 
        let result = "";
        this.accounts.forEach(element => {
            result+="|||||||||||||||||||||||||||||||||||\n";
            result+="id:"+element.id+" money:"+ element.money+" owner:"+element.owner.name+" "+ element.owner.ownerSurname+"\n";
            result+="|||||||||||||||||||||||||||||||||||\n";
        });
        setTimeout(function() { 
            callback(result);
        }, 2000);
    }

    Get(id, callback) {
        let result;
        result = this.accounts.filter(acc => acc.id==id).shift();
        setTimeout(function() {
            callback(result);
        }, 1000);
    }

    Transfer(from, to, moneyAmount, callback) {
        let fromAccount = this.accounts.filter(acc => acc.id==from).shift();
        let toAccount = this.accounts.filter(acc => acc.id==to).shift();
        if(fromAccount.money - moneyAmount >= 0) {
            fromAccount.money -= moneyAmount;
            toAccount.money += moneyAmount;
        }
        setTimeout(function() {
            callback({from: from, to: to, moneyAmount: moneyAmount});
        }, 3000);
    }
}

module.exports = BankManager;