function mostrarElemtrosLista(){
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i=0 ; i < lista.length; i++){
    }
}
var isClick = false;
var compraCont = document.getElementById("contenedorCompra");
function mostrar(){
    if(isClick == false){
        compraCont.style.display ='block';
        isClick = true;
    }
    else if(isClick == true){
        compraCont.style.display ='none';
        isClick = false;
    }
}
var b = document.querySelectorAll(".informacionCompra");

function agregarfav(element){
    var padre = element.parentElement;
    var primero = padre.querySelector(".imag").src;
    var segunda = padre.querySelector(".marca").innerHTML;
    var tercera = padre.querySelector(".product-name").innerHTML;
    var cuarto = padre.querySelector(".precio").innerHTML
    var quinto = padre.querySelector(".imagenes").src;
    var sexto = padre.querySelector(".precio-tachado").innerHTML;
    var septimo = padre.querySelector(".corazao").src;
    var octavo = padre.querySelector("agregar").innerHTML

    var informacionCompra = document.querySelector(".informacionCompra");
    informacionCompra.innerHTML +=`
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
<div class="agregar-f4v">
<button class="fav">${octavo}</button>
</div>
    `
}