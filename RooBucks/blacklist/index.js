let blacklist = [];

function blackListCheck(email) {
    let result = blacklist.filter(element => element.email === email)
    if(result.length) {
        if(result[0].loginTry < 5) {
            result[0].loginTry += 1;
        }
        if(result[0].loginTry >= 5){
            result[0].canLogin = false;
            setTimeout(()=>{blacklist.slice(blacklist.indexOf(result[0]),1)}, 10000);
        }
    }
    else {
        blacklist.push({ email: email, loginTry: 1, canLogin: true });
    }
}

function blackListValidate(email) {
    let result = blacklist.filter(element => element.email === email)
    if(result.length) {
        if(result[0].canLogin) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

function blackListRemove(email) {
    let result = blacklist.filter(element => element.email === email)
    if(result.length) {
        blacklist.splice(blacklist.indexOf(result[0]),1)
    }
}

module.exports = { blackListCheck, blackListValidate, blackListRemove };