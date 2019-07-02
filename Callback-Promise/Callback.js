const readline = require('./ReadLine.js');
const BankManager = require('./BankManager.js');

let manager = new BankManager();
manager.AddAccount('danya', 'aynad', 169);
manager.AddAccount('vasya', 'aysav', 288);
manager.AddAccount('petya', 'ayrep', 1654);
manager.AddAccount('kolya', 'aylok', 4894);
manager.AddAccount('miha', 'ahim', 9413);

function StartCallback() {
    console.clear();
    readline.question("List of commands:\n'Get_List' - return all available accounts;\n'Get_#' - get account, where # - account id;\n'Transfer_#_@_$' - transfer, where # - id from, @ - id where, $ - amount of money;\n", 
    function(answer) {
        if(answer.includes('Get'))
        {
            let ar = answer.split('_');
            if(ar.length != 2)
            {
                console.log('No such command!');
                ContinueCallback();
            }
            else if(ar[1].toLowerCase() == 'list')
            {
                manager.GetList(function(answer){
                    console.log(answer);
                    ContinueCallback();
                })
            }
            else 
            {
                manager.Get(ar[1], function(answer) {
                    console.log(answer);
                    ContinueCallback();
                });
            }
        }
        else if(answer.includes('Transfer'))
        {
            let ar = answer.split('_');
            if(ar.length != 4)
            {
                console.log('No such command!');
                ContinueCallback();
            }
            else
            {
                manager.Transfer(ar[1], ar[2], Number(ar[3]), function(answer) {
                    console.log(answer);
                    ContinueCallback();
                });  
            }
        }
        else {
            console.log('No such command!');
            ContinueCallback();
        }
    });
}

function ContinueCallback() {
    readline.question("Press any key to continue: ", 
    function() {
        StartCallback();
    });
}

module.exports = StartCallback;