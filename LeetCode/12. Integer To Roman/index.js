/**
 * @param {number} num
 * @return {string}
 */

var repeatChar = function(c, rep) {
    let s = "";
    for(let i = 0; i < rep; i++) {
        s += c;
    }
    return s;
}

var intToRoman = function(num) {
    let roman = "";
    let remainder = num;

    const thou = parseInt(remainder / 1000);
    if(thou > 0) {
        roman += repeatChar("M", thou);
    }
    remainder %= 1000;
    const hundreds = parseInt(remainder / 100);
    if(hundreds > 0) {
        if(hundreds === 4) {
            roman += "CD";
        } else if(hundreds === 9) {
            roman += "CM";
        } else if(hundreds < 4) {
            roman += repeatChar("C", hundreds)
        } else {
            roman += "D";
            roman += repeatChar("C", hundreds - 5);
        }
    }

    remainder %= 100;
    const tens = parseInt(remainder / 10);
    if(tens > 0) {
        if(tens === 9) {
            roman += "XC";
        }
        else if(tens === 5) {
            roman += "L";
        } else if(tens === 4) {
            roman += "XL";
        } else if(tens < 4) {
            roman += repeatChar("X", tens);
        } else {
            roman += "L";
            roman += repeatChar("X", tens - 5);
        }
    }
    remainder %= 10;
    if(remainder > 0) {
        if(remainder === 9) {
            roman += "IX";
        }
        else if(remainder === 5) {
            roman += "V";
        } else if(remainder === 4) {
            roman += "IV";
        } else if(remainder < 4) {
            roman += repeatChar("I", remainder);
        } else {
            roman += "V";
            roman += repeatChar("I", remainder - 5);
        }
    }


    return roman;
};