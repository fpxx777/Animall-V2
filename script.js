var click = true;
var cat = document.getElementById("cat")


cat.style.display = "none";
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
    {
        marca: 'Champin Dog',
        nombre: 'Alimeto de Perro Senior 2,7 kg',
        precio: '$12.50',
        descuento: '5%',
        precioAnterior: '$25.000'
    }
]
console.log(productoo[0].marca);
var a = document.querySelectorAll(".product");


for (var i = 0; i < 4; i++) {
a[i].innerHTML = `
<div class="product-img">
                <img class="imag" id="imag" src="img/Perro.jpg" alt="">
            </div>
            <p class="marca">${productoo[i].marca}</p>
            <div class="product-info">
                <p class="product-name">${productoo[i].nombre}</p>
                <div class="cont-precio">
                    <p class="precio">${productoo[i].precio}</p>
                    <img class="imagenes" src="img/Flecha.png" alt="">
                </div>
                <p class="precio-tachado">${productoo[i].precioAnterior}</p>
                <img class="corazao" onclick="agregarfav(this)" src="img/Corazon-black.png" alt="">
            </div>
            <div class="agregar-cont">
            <button class="agregar">
                Agregar al carro
            </button>
            </div>`
            console.log("si")
}
function borraEmail(){
    document.getElementById("email").value = "¡Gracias!"
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



////////////////////////////*///////////////////
