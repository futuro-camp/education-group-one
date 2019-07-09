const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ValidateEmail(mail){
    if(mailRegExp.test(mail)){
        return true;
    } else{
        return "Wrong input!";
    }
}

function ValidatePassword(password){
    if(password.trim()){
        return true;
    } else{
        return "Wrong input!";
    }
} 

module.exports = {ValidateEmail, ValidatePassword};