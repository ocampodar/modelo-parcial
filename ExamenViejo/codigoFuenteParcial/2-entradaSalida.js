//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var iva;
    var preciofinal;
    importe = parseFloat(prompt("Ingrese un importe"));
    iva = importe *21 / 100;
  preciofinal = importe + iva;
  preciofinal = document.getElementById("importe").value;

}

