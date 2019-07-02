const readline = require('./ReadLine.js');
const PromiseBankManager = require('./PromiseBankManager.js');

let managerPromise = new PromiseBankManager();
managerPromise.AddAccount('danya', 'aynad', 169);
managerPromise.AddAccount('vasya', 'aysav', 288);
managerPromise.AddAccount('petya', 'ayrep', 1654);
managerPromise.AddAccount('kolya', 'aylok', 4894);
managerPromise.AddAccount('miha', 'ahim', 9413);


function StartPromise() {
    console.clear();
    readline.question("List of commands:\n'Get_List' - return all available accounts;\n'Get_#' - get account, where # - account id;\n'Transfer_#_@_$' - transfer, where # - id from, @ - id where, $ - amount of money;\n", 
    function(answer) {
        if(answer.includes('Get'))
        {
            let ar = answer.split('_');
            if(ar.length != 2)
            {
                console.log('No such command!');
                ContinuePromise();
            }
            else if(ar[1].toLowerCase() == 'list')
            {
                managerPromise.GetList().then(function(a) {
                    console.log(a);
                }).catch(function(error) {
                    console.log(error)
                }).then(ContinuePromise);
            }
            else 
            {
                managerPromise.Get(ar[1]).then(function(a) {
                    console.log(a);
                }).catch(function(error) {
                    console.log(error)
                }).then(ContinuePromise);  
            }
        }
        else if(answer.includes('Transfer'))
        {
            let ar = answer.split('_');
            if(ar.length != 4)
            {
                console.log('No such command!');
                ContinuePromise();
            }
            else
            {
                managerPromise.Transfer(ar[1], ar[2], Number(ar[3])).then(function(a) {
                    console.log(a);
                }).catch(function(error) {
                    console.log(error)
                }).then(ContinuePromise);            
            }
        }
        else {
            console.log('No such command!');
            ContinueCallback();
        }
    });
}

function ContinuePromise() {
    readline.question("Press any key to continue: ", 
    function() {
        StartPromise();
    });
}

module.exports = StartPromise;