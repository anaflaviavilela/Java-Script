document.querySelector('#btn-calcular').addEventListener("click", function(){
    let numero = document.querySelector('#txtNumero').value;
    let numero2 = document.querySelector('#txtNumero2').value;
    let numero3 = document.querySelector('#txtNumero3').value;
    
    if (numero < numero2 && numero2 < numero3){
        if (numero2 < numero3){
            alert( numero3 + " " + numero2 + " " + numero);
        }
        else{
        alert (numero2 + " " + numero3 + " " + numero);
        }
    }

    else if (numero2 < numero && numero2 < numero3){
        if (numero < numero3){
            alert (numero3 + " " + numero + " " + numero2);
        }
        else{
           alert (numero + " " + numero3 + " " + numero2);
        }
    }

    else if (numero3 < numero && numero3 < numero2){
        if (numero < numero2){
            alert (numero2 + " " + numero + " " + numero3);
        }
        else{
        alert (numero + " " + numero2 + " " + numero3);
        }
    }
    else {
        alert (" ");
    }  
    
});