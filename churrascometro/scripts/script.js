let inputAdultos = document.getElementById("adultos");
let inputAdultosQueBebem = document.getElementById("adultos_q_bebem");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function carne_pp(duracao){
    if(duracao >= 6)
        return 650;
    else
        return 400;
}

function cerveja_pp(duracao){
    if(duracao >= 6)
        return 2000;
    else
        return 1200;
}

function bebidas_pp(){
    if(duracao >= 6)
        return 1500;
    else
        return 1000;
}

function calcular() {
    let adultos = inputAdultos.value;
    let adultos_q_bebem = inputAdultosQueBebem.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = (carne_pp(duracao) * adultos + (carne_pp(duracao)/2 * criancas))/1000;
    let qtdTotalCerveja = Math.ceil((cerveja_pp(duracao) * adultos_q_bebem)/355);
    let qtdTotalBebidas = (bebidas_pp(duracao) * adultos + (bebidas_pp(duracao)/2 * criancas))/1000;

    resultado.innerHTML = `<p>${qtdTotalCarne} kg de carne</p>`;
    resultado.innerHTML += `<p>${qtdTotalCerveja} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${qtdTotalBebidas} l de bebidas(suco/refrigerante)</p>`;
}