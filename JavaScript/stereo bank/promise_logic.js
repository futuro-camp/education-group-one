class BankManager {

    constructor(accounts) {
        this.accounts = accounts
    }

    GetList() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                let result = "";
                this.accounts.forEach(element => {
                    result+="|||||||||||||||||||||||||||||||||||\n";
                    result+="id:"+element.id+" money:"+ element.money+" owner:"+element.owner.name+" "+ element.owner.ownerSurname+"\n";
                    result+="|||||||||||||||||||||||||||||||||||\n";
                });
                resolve(result);
            }, 2000);
        });
    }  

    Get(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result;
                result = this.accounts.filter(acc => acc.id==id).shift();
                if(result != undefined) {
                    resolve(result);
                }
                else {
                    reject();
                }
            }, 1000);
        });
    }

    Transfer(from, to, moneyAmount) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                let fromAccount = this.accounts.filter(acc => acc.id==from).shift();
                let toAccount = this.accounts.filter(acc => acc.id==to).shift();
                if(fromAccount.money - moneyAmount >= 0) {
                    fromAccount.money -= moneyAmount;
                    toAccount.money += moneyAmount;
                }
                else {
                    reject();
                }
                resolve({from: from, to: to, moneyAmount: moneyAmount});
            }, 3000);
        });
    }
}

module.exports = BankManager;