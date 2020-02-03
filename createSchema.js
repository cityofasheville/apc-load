let getWordArray = require("./getWordArray");

function createSchema(dataIn) {
    // convert strings to arrays of chars: space or x
    let flagStrings = dataIn.map(str=> str.split('').map((char) => {return char===" "?" ":"x"}).join(''));
    for (s of flagStrings){ console.log(s)}
    
    let pattern = flagStrings.reduce((acc,yn)=>{
        return matchSpaces(acc,yn);
    });
    console.log('-------------')
    console.log(pattern);

    for (line of dataIn){ console.log(getWordArray(line, pattern))}; 
}

function matchSpaces(str1,str2) {
    let len = Math.max(str1.length,str2.length);
    let result = '';
    for( let i = 0; i < len; i++ ){
        result += (str1.charAt(i) === " " && str2.charAt(i) === " ")?" ":"x";
    }
    return result;
}

module.exports = createSchema;