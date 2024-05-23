function verificaChute(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numeroDifere(numero)){
        elementoChute.innerHTML += `<div>Número inválido, precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>`;
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i className="fa-solid fa-arrow-down"></i></div>`;
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i className="fa-solid fa-arrow-up"></i></div>`;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroDifere(numero){
    return numero > maiorValor || numero < menorValor;
}