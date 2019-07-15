function accountCheck(accounts, login, password){
    let accountsObj = JSON.parse(accounts);
    return accountsObj.accounts[accountsObj.accounts
                                            .map((x) => `${x.email} ${x.password}`)
                                            .indexOf(`${login} ${password}`)];
}

function accountWrite(accounts, account){
    accounts = JSON.parse(accounts);
    accounts[accounts.accounts.map((x) => x.email).indexOf(account.email)] = account;
    accounts = JSON.stringify(accounts);
    return accounts;
}

module.exports = { accountCheck, accountWrite};