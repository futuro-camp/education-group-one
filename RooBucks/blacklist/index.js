let blacklist = [];
let attemptsCount = 5;

function blackListValidate(email) {
    let result = blacklist.filter((element) => element.email === email);
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
        blacklist.splice(blacklist.indexOf(result[0]), 1);
    }
}

function blackListCheck(email) {
    console.log(email);
    let result = blacklist.filter((element) => element.email === email)
    if(result.length) {
        if(result[0].loginTry < attemptsCount) {
            result[0].loginTry += 1;
        }
        if(result[0].loginTry === attemptsCount){
            result[0].canLogin = false;
            setTimeout(() => {blackListRemove(result[0]);}, 600000);
        }
    }
    else {
        let newEnrty = { email, loginTry: 1, canLogin: true };
        blacklist.push(newEnrty);
        setTimeout(() => {
            if(blackListValidate(newEnrty.email)){
                blackListRemove(newEnrty.email);
            }
        }, 60000);
    }
}

module.exports = { blackListCheck, blackListValidate, blackListRemove };