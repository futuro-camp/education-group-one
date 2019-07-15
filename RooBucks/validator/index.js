function emailValidate(email) {
    if(email.match(/.+\@.+\..+/g) !== null) {
        return true;
    }
    else {
        return "Please insert valid email address";
    }
}

function passwordValidate(password) {
    if(password.length > 0) {
        return true;
    }
    else {
        return "Please insert password";
    }
}

module.exports = { emailValidate, passwordValidate };