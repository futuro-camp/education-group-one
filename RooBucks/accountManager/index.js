function AccountCheck(accounts, login, password){
    let accountsObj = JSON.parse(accounts);
    return accountsObj.accounts[accountsObj.accounts
                                            .map(x => `${x.email} ${x.password}`)
                                            .indexOf(`${login} ${password}`)];
}

function AccountWrite(accounts, account){
    accounts = JSON.parse(accounts);
    accounts[accounts.accounts.map(x => x.email).indexOf(account.email)] = account;
    accounts = JSON.stringify(accounts);
    return accounts;
}

module.exports = {AccountCheck, AccountWrite};