// Given a row of data and the pattern string, divides the row into an array of words

// let pattern = 'xxxx xx xxx xxxxxxxx xxxx xxxxxx xxxxxx xx xxx xxxx'; 
// let line =    'This is the time and this is the record of the time'; 
// console.log(getWordArray(line, pattern));

function getWordArray(line, pattern) {
    let charArr = Array.from(pattern);
    let prevChar = " ";
    let columns = [];
    let theStart;
    let words = [];
    for(let i = 0; i < charArr.length; i++) {
        if(prevChar === " " && charArr[i] !== " ") {
                // start a new word
                theStart = i;
                prevChar = "0";
        } else 
        if (prevChar !== " " && charArr[i] !== " " && i === (charArr.length - 1)) {
                // still in the word but last char is a zero
                    //
                    let colobj = {};
                    colobj.start = theStart;
                    colobj.end = i + 1;
                    columns.push(colobj);
        } else 
        if (prevChar !== " " && charArr[i] === " " ) { 
                // word ended
                let colobj = {};
                colobj.start = theStart;
                colobj.end = i;
                columns.push(colobj);
                prevChar = " ";
        }
    }

    columns.forEach(col => {
        words.push(line.substring(col.start,col.end));
    });
    return words;
}

module.exports = getWordArray;
