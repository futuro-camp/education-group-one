function arrayToArrayOfArrays(array, length){
    return arrayFormat(array, length, (value) => value);
}

function transactionsToString(account, length){
    return arrayFormat(account, length, (value) => `${value.value}$ in ${value.place} at ${new Date(Date.parse(value.date)).toLocaleDateString("en-US", {day: "numeric", weekday: "long", year: "numeric", month: "numeric", houd: "numeric", minute: "numeric", second: "numeric"})}`);
}

function arrayFormat(account, length, changes)
{
    let finalArray = [];
    let changedArray = account.slice();
    while(changedArray.length){
        let innerArray = [];
        while(innerArray.length != length){
            if(changedArray[0]){
                let tmp = changedArray.shift();
                innerArray.push(changes(tmp));
            }
            else{
                break;
            }
        }
        finalArray.push(innerArray);
    }
    return finalArray;
}

module.exports = {arrayToArrayOfArrays, transactionsToString};