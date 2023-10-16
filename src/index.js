const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let result = '';

    for (let i = 10; i <= expr.length; i += 10) {

        const binaryLetter = expr.slice(i - 10, i);

        if (binaryLetter == '**********') {

            result = result + ' ';

        } else {

            let morseLetter = '';

            for (let n = 0; n < binaryLetter.length; n += 2) {
                const letterPart = binaryLetter.slice(n, n + 2);
                if (letterPart === '10') {
                    morseLetter = morseLetter + '.';
                } else if (letterPart === '11') {
                    morseLetter = morseLetter + '-';
                }
            }

            const letter = MORSE_TABLE[morseLetter];

            if (letter) {
                result = result + letter;
            }

        }
    }

    return result;
}

module.exports = {
    decode
}

// res = decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010');
// console.log('result: ', res);