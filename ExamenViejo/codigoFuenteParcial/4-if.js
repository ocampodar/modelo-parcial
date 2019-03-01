//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var num1;
    var num2;
    var resultado;
    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese otro numero"));
    if (num1 == num2) {
        resultado = num1 * num2;
        alert("La multiplicacion es : " + resultado);
    }
    else if (num1 > num2) {
        resultado = num1 - num2;
        alert("La resta es: " + resultado);
    }
    if (num1 < num2) {
        resultado = num1 + num2;
        alert("La suma es :" + resultado)
    }
}

