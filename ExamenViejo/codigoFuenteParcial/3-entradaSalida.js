//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var largo;
    var ancho;
    var perimetro;
    var alambre;
    ancho = parceInt(document.getElementById("ancho").value);
    largo = parceInt(document.getElementById("largo").value);
    perimetro = (ancho+largo)*2;
    alambre = perimetro * 6;
    
    console.log("HOLA");

}

