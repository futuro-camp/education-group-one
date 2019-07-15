// ENCODER file

// key of cryptCard
let key = ["_", "e", "o", "`", "9", "E", "^", "N", "r", "j", "[", "J", "0", "5", "H", "T", "y", "B", "1", "]", ",", "\'", "v", "s", "/", "@", '"', "!", "S", "U", "m", "$", "?", "b", "2", "d", "&", "g", "Y", "W", "Z", "Q", "M", "#", "G", "i", "=", "R", "u", "\\", "%", "z", "p", "q", "A", ";", "~", "k", "3", "{", "F", "(", "K", "O", "a", "6", "-", "w", "n", "V", "+", "8", "t", "f", "P", ":", "x", ")", "D", "L", "}", "4", "X", "7", "l", "c", "h", "*", ".", "I", "C", " "];
let input = "abcdefghijklmnopqrstuvwxyz";


// function which crypted user-date from dataManager"s returned date
function enCode(input){
    var crypted = input.split("");
    for (let i = 0; i < crypted.length; i++) {
        let tmp;
        tmp = key.indexOf(crypted[i]);
        tmp+3 >= key.length ? tmp=(tmp+3)-key.length : tmp= tmp + 3;
        crypted[i] = key[tmp];
    }
    return crypted.join("");
}
// console.log(enCode(input));

// function which decrypted user-date from dataManager"s returned date
function deCode(decrypted){
    var decrypted = decrypted.split("");
    for (let i = 0; i < decrypted.length; i++) {
        let tmp = key.indexOf(decrypted[i]);
        tmp-3 <= 0 ? tmp=(key.length-tmp) : tmp= tmp - 3;
        decrypted[i] = key[tmp];
    }
    return decrypted.join("");
}
// let a = deCode(enCode(input));
// console.log(a);

module.exports = { deCode, enCode};