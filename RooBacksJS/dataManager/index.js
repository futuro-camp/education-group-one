//DATA MANAGER file

// calling filereader library
const fs = require ("fs");

// Fucntion which will read database.file with user accounts
function readAccounts(){
    return fs.readFileSync ("./resourses/accounts.txt").toString();
}
// console.log(readAccounts());

// Fucntion which will read database.file with locations
function readLocations(){
    return fs.readFileSync ("./resourses/locations.txt").toString();
}
// console.log(readLocations());

// Fucntion which will overwrite database.file with user accounts after user operations with money ballance
function writeAccounts(data){
    fs.writeFileSync ("./resourses/accounts.txt", data);
}

module.exports = { readLocations, readAccounts, writeAccounts};




