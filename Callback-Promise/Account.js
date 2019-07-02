class Account {
    constructor(id, money, name, surname)
    {
        this.id = id;
        this.money = money;
        this.owner = {
            name: name,
            surname: surname
        };
    }
}

module.exports = Account;