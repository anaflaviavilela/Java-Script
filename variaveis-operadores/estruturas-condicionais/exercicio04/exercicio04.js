document.querySelector('#btn-calcular').addEventListener("click", function(){
    let nome = document.querySelector('#txtNome').value;
    let nota = document.querySelector('#txtNota').value;
    let nota2 = document.querySelector('#txtNota2').value;
    var media = (nota = nota2)/2;
    
    if (media >= 7){
        alert (nome + ' aluno Aprovado');
    }
    else if (media <7 && media >=5){
        alert (nome + ' aluno está de recuperação');
    }
    else {
        alert (nome + ' aluno reprovado');
    }

});
