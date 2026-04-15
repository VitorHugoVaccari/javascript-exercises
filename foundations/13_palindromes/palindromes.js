const palindromes = function (str) {
    let arrOriginal = str.split('');
    let arrOriginalSemVirgula = arrOriginal.filter(item => item !== ',' && item !== ' ');
    let original = arrOriginalSemVirgula.join('')
    let arrInvertido = arrOriginalSemVirgula.reverse();
    let invertido = arrInvertido.join('');

    if (invertido === original){
        return true;
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
