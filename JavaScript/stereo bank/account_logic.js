class Account {

    constructor(id, money, ownerName, ownerSurname) {
        this.id = id;
        this.money = money;
        this.owner = {
            ownerName,
            ownerSurname,
        }
    }
}

module.exports = Account;
