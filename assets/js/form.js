const botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.querySelector("#form-adiciona");
    const aluno = obtemAlunoDoFormulario(form);
    const alunoTr = montaTr(aluno);
    const tabela = document.querySelector("tabela-aluno");
    tabela.appendChild(alunoTr);
    form.reset();
});