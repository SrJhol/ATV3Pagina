'use strict';// modo restrito
//verifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido =(cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
        //hasOwnProperty retorna um valor boleano indicado se o objetivo possui a propriedade especifica
        if(addres.hasOwnProperty('erro')){
            alert("CEP não encontrado");

        } else{
            preencherFormulario(addres);
        }
    }
}

preencherFormulario(endereco) => {
    
}
limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
