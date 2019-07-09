const fs = require("fs");

function readAccountsData(){
    return fs.readFileSync("./resources/accounts.txt").toString();
}

function writeAccountsData(data){
    fs.writeFileSync("./resources/accounts.txt", data);
}

function readPlacesData(){
    return JSON.parse(fs.readFileSync("./resources/places.txt").toString());
}

module.exports = {readAccountsData, writeAccountsData, readPlacesData};