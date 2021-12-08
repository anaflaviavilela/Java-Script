document.querySelector('#btn-calcular').addEventListener("click", function(){

    let nome = document.querySelector('#txtNome').value;
    let valorH = parseFloat(document.querySelector('#txtVHora').value);
    let tHoras = parseFloat(document.querySelector('#txtTHoras').value);
    let menu = document.querySelector('#txtMenu').value;
    var vTransporte = 0;
    var iRenda = 0;
    var sBruto = valorH * tHoras;
    alert ('O salario bruto de ' + nome + ' é ' + sBruto);


    if (sBruto > 1440.00){
        iRenda = sBruto * 0.11;
    }
     else{
         alert ('Não possui IR!');
    }

    switch (menu) {

        case "sim":
            vTransporte = sBruto * 0.06;
            alert ('O valor de desconto de Vale Transporte é ' + vTransporte);
            break;
    }

    var sLiquido = sBruto - vTransporte - iRenda;
    alert ('O salario liquido é ' + sLiquido);


});
