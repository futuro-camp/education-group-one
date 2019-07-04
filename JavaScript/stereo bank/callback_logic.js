class BankManager {

    constructor(accounts) {
        this.accounts = accounts;
    }

    getList(callback) { 
        var result = "";
        this.accounts.forEach((element) => {
            result+="|||||||||||||||||||||||||||||||||||\n";
            result+="id:"+element.id+" money:"+ element.money+" owner:"+element.owner.name+" "+ element.owner.ownerSurname+"\n";
            result+="|||||||||||||||||||||||||||||||||||\n";
        });
        setTimeout(function() { 
            callback(result);
        }, 2000);
    }

    get(id, callback) {
        let error;
        let result;
        result = this.accounts.filter((acc) => acc.id===id).shift();
        setTimeout(function() {
            if(result){
                callback(error, result);
            }
            else {
                error = "There is no account with this id";
                callback(error, result);
            }
        }, 1000);
    }

    transfer(from, to, moneyAmount, callback) {
        let error;
        let fromAccount = this.accounts.filter((acc) => acc.id===from).shift();
        let toAccount = this.accounts.filter((acc) => acc.id===to).shift();
        setTimeout(function() {
        if(fromAccount.money - moneyAmount >= 0) {
            fromAccount.money -= moneyAmount;
            toAccount.money += moneyAmount;
            callback(error, {from, to, moneyAmount});
        }
        else {
            error = "Not enough money for transaction";
            callback(error, {from, to, moneyAmount});
        }    
        }, 3000);
    }
}

module.exports = BankManager;
