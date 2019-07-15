class Account {
    constructor(id, money, name, surname){
        this.id = id;
        this.money = money;
        this.owner = {
            name,
            surname
        };
    }
}

module.exports = Account;