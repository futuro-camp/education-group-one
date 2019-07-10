let accs = [
    {
        email: 'first@ads.ss',
        password: 'asdasdasdasd',
        id: 1,
        money: 100,
        transaction: [
            {"value":50,"place":"University","date":"2019-07-08T11:07:29.252Z"},{"value":100,"place":"McDonalds","date":"2019-07-08T11:07:29.252Z"},{"value":-35,"place":"Adidas","date":"2019-07-08T11:07:29.252Z"}
        ]
    },
    {
        email: 'second@ads.ss',
        password: 'asdasdasdasd',
        id: 2,
        money: 125,
        transaction: [
            {"value":50,"place":"University","date":"2019-07-08T11:07:29.252Z"},{"value":100,"place":"McDonalds","date":"2019-07-08T11:07:29.252Z"},{"value":-35,"place":"Adidas","date":"2019-07-08T11:07:29.252Z"}
        ]
    },
    {
        email: 'third@ads.ss',
        password: 'asdasdasdasd',
        id: 3,
        money: 150,
        transaction: [
            {"value":50,"place":"University","date":"2019-07-08T11:07:29.252Z"},{"value":100,"place":"McDonalds","date":"2019-07-08T11:07:29.252Z"},{"value":-35,"place":"Adidas","date":"2019-07-08T11:07:29.252Z"}
        ]
    }
];
let email = 'first@ads.ss';

//function which will check account existence
function checkAccount(accountsList, answer){
    accountsList = JSON.parse(accountsList);
    let result;
    accountsList.accounts.forEach(element => {
        if (element.email === answer.email && element.password === answer.password){
            result = element;
        }
    });
    return result;
}

module.exports = {checkAccount};