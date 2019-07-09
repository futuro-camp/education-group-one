const codeKey = [ "_", "e", "o", "`", "9", "E", "^", "N", "r", "j", "[", "J", "0", "5", "H", "T", "y", "B", "1", "]", ",", 
                "'", "v", "s", "/", "@", "\"", "!", "S", "U", "m", "$", "?", "b", "2", "d", "&", "g", "Y", "W", "Z", "Q", 
                "M", "#", "G", "i", "=", "R", "u", "\\", "%", "z", "p", "q", "A", ";", "~", "k", "3", "{", "F", "(", "K", 
                "O", "a", "6", "-", "w", "n", "V", "+", "8", "t", "f", "P", ":", "x", ")", "D", "L", "}", "4", "X", "7", 
                "l", "c", "h", "*", ".", "I", "C", " " ];
const codeStep = 3;

function encode(data){
    return code(data, (index) => index + codeStep < codeKey.length ? index + codeStep : index + codeStep - codeKey.length);
}

function decode(data){
    return code(data, (index) => index - codeStep >= 0 ? index - codeStep : codeKey.length + (index - codeStep));
}

function code(data, calc){
    var enData = data.split("");
    for(let i = 0; i < enData.length; i++){
        let index = codeKey.indexOf(enData[i]);
        index = calc(index);
        enData[i] = codeKey[index];
    }
    return enData.join("");
}

module.exports = {encode, decode};