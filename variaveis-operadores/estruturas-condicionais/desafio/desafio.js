document.querySelector('#btn-calcular').addEventListener("click", function(){
    let a = document.querySelector('#txta').value;
    let b = document.querySelector('#txtb').value;
    let c = document.querySelector('#txtc').value;
    let soma = a + b;
    let soma2 = b + c;
    let soma3 = c + a;

    if (soma > c || soma2 > a || soma3 > b){
        alert ("É um triangulo!");
    
        if (a == b && b == c && c == a){
            alert ("Equilatero");
        }
        else if (a != b && b != c && c != a){
            alert ("Escaleno")
        }
        else{
            alert ("Isóceles")
        }
    }
    else {
        alert ("Não é um triangulo!")
    }
});  
