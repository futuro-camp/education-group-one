function getUser(userData, accountsData) {
    let user = accountsData.filter(element => element.email === userData.email);
    if(user[0]) {
        if(user[0].password === userData.password)
            return { data: user[0], isLoginSuccesfull: true };
    }
    return { data: `\nInvalid Email address and/or Password for user: ${userData.email}\nOr you may have exceeded the number of consecutive attempts allowed`, isLoginSuccesfull: false };
}

module.exports = { getUser };