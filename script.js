var click = true;
var cat = document.getElementById("cat")


cat.style.display = "none"
const productoo = [
    {
        marca: 'Pedigree',
        nombre: 'Alimento Perro Adulto Pedigree Carne Pollo y Cereal 3 kg',
        precio: '$10.990',
        descuento: '50%',
        precioAnterior: '%20.990'
    },
    {
        marca: 'Champion Dog',
        nombre: 'Alimento Seco Para Perro Adulto 15 kg Carne y Cereal',
        precio: '$15.990',
        descuento: '25%',
        precioAnterior: '$20.990'
    },
    {
        marca: 'Champion Dog',
        nombre: 'Alimento de Perro Senior 2,7 kg',
        precio: '$12.500',
        descuento: '50%',
        precioAnterior: '$25.000'
    },
]


var img = document.getElementsByClassName("imag");
var marc = document.getElementsByClassName("marca");
var productName = document.getElementsByClassName("product-name");
var precioo = document.getElementsByClassName("precio")
var precioPasado = document.getElementsByClassName("precio-tachado")


for (var i = 0; i < 4; i++) {
document.getElementById("[i]").innerHTML = `
<div class="product-img"> <img class="imag" src="img/Perro.jpg" alt=""> </div>`
}



















function ClicleameEsta() {
    if (click == false) {
        cat.style.display = "none";
        click = true;
    }
    else if (click == true) {
        cat.style.display = "flex";
        click = false;
    }
}