var titulo = document.querySelector(".titulo");
titulo.textContent = "Logo";

var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    var tdPeso = aluno.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = aluno.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = aluno.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido";
        aluno.classList.add("aluno-invalido");
    }
    if (!alturaEhValida) {
        console.log("Altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";
        aluno.classList.add("aluno-invalido");
    }
    if (pesoEhValido && alturaEhValida) {
        var imd = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000){
        return true;
    }else{
        false;
    }

}
function validaAltura(altura){
    if(altura >= 0 && altura <=3.00){ 
        return true;
    }else{
        return false;
    }
}