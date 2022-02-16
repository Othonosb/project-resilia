// function validaEmail(str) {

// var separar = str.split("@")
// var usuario = separar[0]
// var dominio = separar[1]

// if (str.search("@")===-1 || str.search(" ")>-1 || dominio.search(".")===-1 || usuario.length<1 || dominio.length<3)
// {
// alert ("Email Inválido")
// }
// else {
    // alert ("E-mail de recuperação enviado")
    // }
    // }
    
    // Limpa o campo
    
    
    function validacaoEmail(field) {
        
        
        event.preventDefault();
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    
        
        if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            alert("Email enviado! Confira sua caixa de entrada e redefina sua senha!");
            
        }
        else{
            alert("E-mail invalido");
        }   
    }

    


