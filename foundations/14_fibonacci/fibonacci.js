const fibonacci = function(contagem) {
    let num;
    if (typeof contagem !== "number") {
        num = parseInt(contagem);
    } else {
        num = contagem;
    }

    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    }

    let anterior = 0;
    let atual = 1 ;
    let proximo = 0;
    
    for (let i = 2; i <= num; i++) { 
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return atual;
};

// Do not edit below this line
module.exports = fibonacci;
