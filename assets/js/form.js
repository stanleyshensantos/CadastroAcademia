var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var aluno = obtemAlunoDoFormulario(form);
    var alunoTr = montaTr(aluno);
    var erros = validaAluno(aluno);
    if (erros.length > 0){
        exibirMensagensDeErro(erros);
        return;
    }
    adicionaAlunoNaTabela(aluno);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
});
function obtemAlunoDoFormulario(form){
    var aluno = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return aluno;
}
function montaTr(aluno){
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.peso, "info-peso"));
    alunoTr.appendChild(montaTd(aluno.altura, "info-altura"));
    alunoTr.appendChild(montaTd(aluno.gordura, "info-gordura"));
    alunoTr.appendChild(montaTd(aluno.imc, "info-imc"));

    return alunoTr;

}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}
function validaAluno(aluno) {

    var erros = [];

    if (aluno.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (aluno.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (aluno.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (aluno.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(aluno.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(aluno.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function adicionaAlunoNaTabela(paciente) {
    var alunoTr = montaTr(aluno);
    var tabela = document.querySelector("#tabela-aluno");
    tabela.appendChild(alunoTr);
}