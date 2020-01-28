let getWordArray = require("./getWordArray");
let dataIn = 
[
    '     LAUS          State   Area FIPS                                                                              Civilian                                      Unemployment',
    '     Code        FIPS Code   Code                               Area                               Year  Month   Labor Force       Employment    Unemployment        Rate',
    'MT0111500000000     01       11500      Anniston-Oxford-Jacksonville, AL MSA                       1990    01        51,624            48,014         3,610           7.0',
    'MT0112220000000     01       12220      Auburn-Opelika, AL MSA                                     1990    01        44,308            40,971         3,337           7.5',
    'MT0113820000000     01       13820      Birmingham-Hoover, AL MSA                                  1990    01       458,716           434,531        24,185           5.3',
    'MT0119300000000     01       19300      Daphne-Fairhope-Foley, AL MSA                              1990    01        46,160            43,744         2,416           5.2',
    'MT0119460000000     01       19460      Decatur, AL MSA                                            1990    01        65,529            61,211         4,318           6.6',
    'MT0120020000000     01       20020      Dothan, AL MSA                                             1990    01        58,596            56,174         2,422           4.1',
    'MT0122520000000     01       22520      Florence-Muscle Shoals, AL MSA                             1990    01        62,058            57,834         4,224           6.8        '
    ]
    // convert strings to arrays of chars: space or x
    let flagStrings = dataIn.map(str=> str.split('').map((char) => {return char===" "?" ":"x"}).join(''));
    for (s of flagStrings){ console.log(s)}
    
    function matchSpaces(str1,str2) {
        let len = Math.max(str1.length,str2.length);
        let result = '';
        for( let i = 0; i < len; i++ ){
            result += (str1.charAt(i) === " " & str2.charAt(i) === " ")?" ":"x";
        }
        return result;
    }

    let pattern = flagStrings.reduce((acc,yn)=>{
        return matchSpaces(acc,yn);
    });
    console.log('-------------')
    console.log(pattern);

    for (line of dataIn){ console.log(getWordArray(line, pattern))};
    
 