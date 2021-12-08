document.querySelector('#btn-calcular').addEventListener("click", function(){

    let numero = document.querySelector('#txtNumero').value;
    let numero2 = document.querySelector('#txtNumero2').value;
    let numero3 = document.querySelector('#txtNumero3').value;

    if (numero % 2 == 0){
        let resultado = numero * 3;
        alert ("Número é par " + resultado);
    }
    else{
        let resultado2 = numero + 7;
        alert ("Número é impar " + resultado2);
    }

    if (numero2 % 2 == 0){
        let resultado = numero2 * 3;
        alert ("Número é par " + resultado);
    }
    else{
        let resultado2 = numero2 + 7;
        alert ("Número é impar " + resultado2);
    }

    if (numero3 % 2 == 0){
        let resultado = numero3 * 3;
        alert ("Número é par " + resultado);
    }
    else{
        let resultado2 = numero3 + 7;
        alert ("Número é impar " + resultado2);
    }


});