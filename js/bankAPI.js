class Account {
    constructor(name, money, id){
        this.name=name;
        this.money=money;
        this.id=id
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
            cb(this.bankList);
        }, 3000);
    }
    getId(number,cb){
        setTimeout(()=>{
            let identifier = this.bankList.find(Acc=> Acc.id===number);
            cb(identifier);
        }, 1000);
    }
    transfer(from,to,amount,cb){
        setTimeout(()=>{
            let accountF = this.bankList.find(account=> account.id===from);
            let accountT = this.bankList.find(account=> account.id===to);
            console.log(accountF, accountT);
            this.bankList = this.bankList.map(account=> {
                if(account.id === accountF.id ){
                    return {
                        name: account.name,
                        money: account.money - amount,
                        id: account.id
                    }
                }
                if(account.id === accountT.id){
                    return {
                        name: account.name,
                        money: account.money + amount,
                        id: account.id
                    }
                }
                return account;
            });
            cb(this.bankList, amount);
        }, 3000);
    }
}
let Privat = new Bank ('Privat Bank', []);
Privat.createAccount(new Acc('Antony',1200, 1));
Privat.createAccount(new Acc('Volodya',2200,2));
Privat.createAccount(new Acc('Ignatik',3200,3));
Privat.createAccount(new Acc('Kartoshka',4200,4));


// Privat.getList(function(list){
//     console.log(list);
// });
// Privat.getId(2, function idFinder(identifier){
//     console.log(identifier);
// });
Privat.transfer(2,3,247, function(list, transactionAmount){
    console.log('');
    console.log('success transfer ' + transactionAmount +'$');
    console.log(list);
});