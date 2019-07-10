// regExp for email validation
    let successEmail = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
// // regExp for email validation
//     let successEmail = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    // let email = 'asd@asd.asd';
// function which cheks is email valid ?
    function checkEmail(input){
        return successEmail.test(input);
    }
// function which cheks is password valid ?
    function checkPassword(input){
        return Boolean(input.trim());
    }
    // console.log(checkEmail());

    // banned users array
    let blackList = [];
// function which controls quantity of wrong logging
    function banCheck(email){
        if (blackList.indexOf(email) !== -1){
            if(blackList.filter(element => element === email).length === 3){
                return true;
            }
        }
        return false;
    }
// adding -1 wrong entry
    function addToBan(email){
        blackList.push(email);
        setTimeout(() => {
            banReducer(email);
        },60000)
        if(banCheck(email)){
            setTimeout(() => {
                blackListFiltered(email);
            }, 600000);
        }
    }
// removing -entry from ban-list
    function blackListFiltered(email){
        blackList = blackList.filter(x => x !== email);
    }
// auto-removing from ban list before ban
function  banReducer(email){
    let x = blackList.indexOf(email);
    if (x!=-1){
        if(!banCheck(email)){
                blackList.splice(x,1);
                setTimeout(() => {
                banReducer(email);
            },60000);
        }
    }
}

    module.exports = {checkEmail, checkPassword, banCheck, banReducer, addToBan, blackListFiltered};