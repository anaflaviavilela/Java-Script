document.querySelector('#btn-calcular').addEventListener("click", function(){
    let salario = parseInt(document.querySelector('#txtSalario').value);
    let salarioReajustado = 0;

    if (salario < 500){
        salarioReajustado = (salario * 0.15) + salario;
    }
    else if (salario >= 500 && salario <= 1000){
        salarioReajustado = salario * 1.10;
    }
    else {
        salarioReajustado = salario * 1.05;
    }

    alert ('Salario reajustado: ' + salarioReajustado);

});