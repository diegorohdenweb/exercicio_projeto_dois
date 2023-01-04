const form = document.getElementById('form-agenda');
const contatos = [];
const inputCep = document.getElementById("endereco-contato");
let zipCode = "";

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();

});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');
    const inputEnderecoContato = document.getElementById('endereco-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já existe na agenda!`)
        inputNomeContato.value = '';
        inputTelContato.value = '';
        inputEnderecoContato.value = '';
    } else {

        contatos.push(inputNomeContato.value);

        let linha = '<div class="grid-x grid-padding-x space_top text-center">';
        linha += `<div class="medium-5 large-5 cell">${inputNomeContato.value}</div>`;
        linha += `<div class="medium-5 large-5 cell">${inputTelContato.value}</div>`;
        linha += `<div class="medium-2 large-2 cell">${inputEnderecoContato.value}</div>`;
        linha += '</div>';

        linhas += linha;

        inputNomeContato.value = '';
        inputTelContato.value = '';
        inputEnderecoContato.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('content');
    corpoTabela.innerHTML = linhas;
}


const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

inputCep.addEventListener("keyup", formatarCep);

function formatarCep(e) {

    var v = e.target.value.replace(/\D/g, "")

    v = v.replace(/^(\d{5})(\d)/, "$1-$2")

    e.target.value = v;

}