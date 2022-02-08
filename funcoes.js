
//FUNÇOES DA API ========= NÃO APAGAR | arquivo raiz ==============>>>>>>

const preencherFormulario = (endereco) =>{  //funcao que preenche os campos. IMPORTANTE
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('number').value = endereco.ddd;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    //<<<==================ORIENTAÇÃO A OBJETOS ATIVA ===============>>>>>>
}

const pesquisarCep = async()=>{     //async determina q é uma função assicrona

    const cep = document.getElementById('cep').value; 
    //variavel que solicita o valor do imput do cep OU SEJA, o conteudo que sera digitado ali dentro.

    const url =  `http://viacep.com.br/ws/${cep}/json/unicode/`;
    //variavel que recebe o url ou chamado do servidor. ULTILIZANDO o valor do imput 'cep' como apresentado dentro do sifrão ${}

    const dados = await fetch(url); //await é necessario para evitar que a resposta final não fique pendente
    //solicita os dados do servidor de api e aguarda o resultado como uma promessa

    const endereco = await dados.json(); 
    //metodo que solicita o endereço junto com a função de 'aguarde | await' a informação pendente
  
    preencherFormulario(endereco);
}
document.getElementById('cep');
        addEventListener('focusout',pesquisarCep);
        

//FIM DA FUNÇÃO DA API | NÃO APAGAR =======================>>>>>>>>>>

