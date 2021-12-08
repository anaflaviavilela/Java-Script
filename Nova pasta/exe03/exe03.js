document.querySelector('#btn-calcular').addEventListener("click", function(){

    let numero = document.querySelector('#txtNumero').value;
    let numero2 = document.querySelector('#txtNumero2').value;

    [numero, numero2] = [numero2, numero];
    
    alert (`${numero} ${numero2}`);

});
