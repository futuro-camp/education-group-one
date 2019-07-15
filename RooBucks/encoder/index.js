var key =  [ "_", "e", "o", "`", "9", "E", "^", "N", "r", "j", "[", "J", "0", "5", "H", "T", "y", "B", "1", "]", ",", "\"", "v", "s", "/", "@", "\"", "!", "S", "U", "m", "$", "?", "b", "2", "d", "&", "g", "Y", "W", "Z", "Q", "M", "#", "G", "i", "=", "R", "u", "\\", "%", "z", "p", "q", "A", ";", "~", "k", "3", "{", "F", "(", "K", "O", "a", "6", "-", "w", "n", "V", "+", "8", "t", "f", "P", ":", "x", ")", "D", "L", "}", "4", "X", "7", "l", "c", "h", "*", ".", "I", "C", " "];
var shift = 3;

function encode(data) {
    let encodedData = "";
    let splittedData = data.split("");
    for (let i = 0; i < splittedData.length; i++) {
        let keyIndex = key.indexOf(splittedData[i]);
        encodedData += key[keyIndex + shift >= key.length ? keyIndex + shift - key.length : keyIndex + shift];
    }
    return encodedData;
}

function decode(data) {
    let decodedData = "";
    let splittedData = data.split("");
    for (let i = 0; i < splittedData.length; i++) {
        let keyIndex = key.indexOf(splittedData[i]);
        decodedData += key[keyIndex - shift < 0 ? keyIndex - shift + key.length : keyIndex - shift];
    }
    return decodedData;
}

module.exports = { encode, decode };
