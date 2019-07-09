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
function checkAccount(identificator){
    let view;
    view = accs.find(Element => Element.email==identificator);
    console.log('');
    console.log(`Account name : ${view.email}`);
    console.log('');
    console.log(`Your balance is : ${view.money}$`);
    let history = view.transaction;
    return history;
}
// checkAccount(email);

//functiom which view transaction history
function checkHistory(history){
    console.log('');
    history.map(function(item){
        if (item.value>0) {
            console.log(`Credited money ${item.value}$ by the adress ${item.place} on ${item.date};`);
        } else {
            console.log(`Spent money ${item.value}$ by the adress ${item.place} on ${item.date};`);
        }
        })
    console.log('');
}
checkHistory(checkAccount(email));