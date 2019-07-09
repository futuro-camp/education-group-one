function arraySplit(array) {
    let result = [];
    for (let i = 0; i < array.length; i += 4) {
        let splitedArray = array.splice(i, 4);
        result.push(splitedArray);
    }
    return result;
}

function transactionsToArray(transactionsArray) {
    let stringArray = transactionsArray.map((element) => {
        let datestring = new Date(Date.parse(element.date)).toLocaleDateString('en-US', {
            weekday: "long",
            year: "numeric",
            month: "long", 
            day: "numeric", 
            hour: "numeric", 
            minute: "numeric"
        });
        let valueString = element.value > 0 ? " enrollment: " + element.value : " spent: " + element.value;
        return `${datestring} transaction place: ${element.place} ${valueString}`;
    });
    let result = [];
    for (let i = 0; i < stringArray.length; i += 4) {
        let splitedArray = stringArray.splice(i, 4);
        result.push(splitedArray);
    }
    return result;
}

module.exports = { arraySplit, transactionsToArray };