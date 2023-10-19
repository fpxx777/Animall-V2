function mostrarElemtrosLista() {
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i = 0; i < lista.length; i++) {
    }
}
var isClick = false;
var compraCont = document.getElementById("contenedorCompra");
function mostrar() {
    if (isClick == false) {
        compraCont.style.display = 'block';
        isClick = true;
    }
    else if (isClick == true) {
        compraCont.style.display = 'none';
        isClick = false;
    }
}

var b = document.getElementsByClassName(".informacionCompra");

function agregarfav(element) {
    b = element.parentElement;
    var primero = b.querySelector(".imag").src;
    var segunda = b.querySelector(".marca").innerText;
    var tercera = b.querySelector(".product-name").innerText;
    var cuarto = b.querySelector(".precio").innerText;
    var quinto = b.querySelector(".imagenes").src;
    var sexto = b.querySelector(".precio-tachado").innerText;
    var septimo = b.querySelector(".corazao").src;
    var octavo = b.querySelector(".agregar").innerText;
    b.innerHTML += `
    <div class="product-imgfav">
    <img class="imag-fav" src="${primero}" alt="">
</div>
<p class="marcado-fav">${segunda}</p>
<div class="fav-info">
    <p class="fav-name">${tercera}</p>
    <div class="fav-precio">
        <p class="preciof">${cuarto}</p>
        <img class="imagenesfav" src="${quinto}" >
    </div>
    <p class="fav-tachado">${sexto}</p>
    <img class="corazon" onclick="quitarfav(this)" src="${septimo}">
</div>
<div class="añadir-f4v">
<button class="fav">${octavo}</button>
</div>
    `
}