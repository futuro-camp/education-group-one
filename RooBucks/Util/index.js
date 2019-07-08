function arraySplit(array) {
    let result = [];
    for (let i = 0; i < array.length; i += 4) {
        let splitedArray = array.splice(i, 4);
        result.push(splitedArray);
    }
    return result;
}

module.exports = { arraySplit };