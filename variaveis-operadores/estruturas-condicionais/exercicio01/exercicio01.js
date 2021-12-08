document.querySelector('#btn-calcular').addEventListener("click", function(){
    let numero = document.querySelector('#txtNumero').value

    if (numero >= 0){
        alert ('Numero é POSITIVO');
    }
    else {
        alert ('Numero é NEGATIVO');
    }
});
