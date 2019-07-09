let inputedMail = [];
let blockedMail = [];
let attempt = 3;

function blockedCheck(mail) {
    if(blockedMail.indexOf(mail) != -1){
        return true;
    }
    return false;
}

function inputMail(mail){
    let query = inputedMail[inputedMail.map(x => x.mail).indexOf(mail)];
    if(query){
        if(query.count == attempt) {
            inputedMail.slice(inputedMail.indexOf(query), 1);
            blockedMail.push(mail);
            setTimeout(()=>blockCallback(mail), 600000);
            return false;
        } else{
            query.count++;
        }
    } else {
        query = {count: 1, mail};
        setTimeout(() => countCallback(query), 60000);
        inputedMail.push(query);
    }
    return true;
}

function removeFromInput(mail){
    inputedMail.splice(inputedMail.map(x => x.mail).indexOf(mail), 1);
}

function blockCallback(mail){
    blockedMail.splice(blockedMail.indexOf(mail), 1);
}

function countCallback(query){
    query.count--;
    if(query.count == 0){
        removeFromInput(query);
    } else{
        setTimeout(() => countCallback(query), 60000);
    }
}

module.exports = {inputMail, blockedCheck, removeFromInput};