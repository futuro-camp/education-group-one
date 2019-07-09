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

    module.exports = {checkEmail, checkPassword};