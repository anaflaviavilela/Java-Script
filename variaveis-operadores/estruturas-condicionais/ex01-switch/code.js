document.querySelector('#btn-calcular').addEventListener("click", function(){

    let numero = parseFloat(document.querySelector('#txtNumero').value);
    let numero2 = parseFloat(document.querySelector('#txtNumero2').value);
    let menu = parseInt(document.querySelector('#txtMenu').value);

    switch (menu){
        case 1: 
            var resultado = numero + numero2;
            alert ('Soma dos valores: ' + resultado);
            break;

        case 2: 
            var resultado = numero * numero2;
            alert ('Multiplicação dos valores: ' + resultado);
            break;

        case 3: 
            if (numero > numero2){
                alert ('O maior valor é: ' + numero);
            }
            else{
                alert ('O maior valor é: ' + numero2);
            }
        break;
            
        default:
            var media = (numero + numero2)/2;
            alert ('Média: '+ media);
        break;
    }
});