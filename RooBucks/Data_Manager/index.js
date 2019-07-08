const fs = require('fs');

function readAccoutsData() {
    return fs.readFileSync("./Storage/accounts.txt").toString();
}

function readLocationData() {
    return fs.readFileSync("./Storage/places.txt").toString();
}

function writeAccountsData(data) {
    fs.writeFileSync("./Storage/accounts.txt", data);
}

module.exports = {readAccoutsData, readLocationData, writeAccountsData};