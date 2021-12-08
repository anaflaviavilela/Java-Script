document.querySelector('#btn-calcular').addEventListener("click", function(){
    let nome = document.querySelector('#txtNome').value;
    let nota = document.querySelector('#txtVHora').value;
    let nota2 = document.querySelector('#txtNota2').value;
    var media = (nota = nota2)/2;
    
    if (media >= 6){
        alert (nome + ', aluno Aprovado');
    }
    else {
        alert (nome + ', aluno reprovado');
    }

});

