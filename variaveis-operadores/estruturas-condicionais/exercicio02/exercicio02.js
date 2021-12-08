document.querySelector('#btn-calcular').addEventListener("click", function(){
    let numero = document.querySelector('#txtNumero').value

    if (numero % 2 == 0){
        alert ('Numero é PAR');
    }
    else {
        alert ('Numero é IMPAR');
    }
});
