var click = true;
var clickCarr = true;
var otroClick = false;
var cat = document.getElementById("cate");
var flecha = document.getElementById("flecha-op");
document.getElementById("carrito-cont").style.display = "none"
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
                <img class="imag" src="img/Perro.jpg" alt="">
            </div>
            <p class="marca">` + productoo[i].marca + `</p>
            <div class="product-info">
                <p class="product-name">`+ productoo[i].nombre + `</p>
                <div class="cont-precio">
                    <p class="precio">`+ productoo[i].precio + `</p>
                    <img src="img/Flecha.png" alt="">
                </div>
                <p class="precio-tachado">`+ productoo[i].precioAnterior + `</p>
                <img onclick="fav(this)" class="corazao" src="img/Corazon-black.png" alt="">
            </div>
            <div class="agregar-cont">
            <button style="cursor: pointer;" onclick="agregarCarro(this)" class="agregar">
                Agregar al carro
            </button>
            </div>`
    console.log("si")
}
function borraEmail() {
    document.getElementById("email").value = "¡Gracias!"
}
var isClick = false;
function fav(element) {
    if (isClick == false) {
        element.src = 'img/Corazon-green.png';
        isClick = true;
    }
    else if (isClick == true) {
        element.src = 'img/Corazon-black.png';
        isClick = false;
    }
}
var num = 1;
function cantidadMas(element) {
    num = num + 1;
    var pa = element.parentNode.querySelector('p');
    pa.innerHTML = num;
}
function cantidadMenos(element) {
    if (num == 1) {
        element.parentNode.parentNode.remove()
    }
    else {
        num = num - 1;
        element.parentNode.querySelector('p').innerHTML = num;
    }
}

function ClicleameEsta() {
    if (click == false) {
        cat.getElementsByTagName("ul")[0].removeAttribute("cat");
        cat.getElementsByTagName("ul")[0].setAttribute("id", "active");
        flecha.style = "margin: 0.4vw 0 0 0.2vw ; transition: 0.5s;"
        click = true;
    }
    else if (click == true) {
        cat.getElementsByTagName("ul")[0].removeAttribute("id");
        flecha.style = " margin: 0.3vw 0 0.1vw 0.2vw ;transition: 0.5s;transform: rotate(180deg);"
        cat.getElementsByTagName("ul")[0].setAttribute("class", "cat");
        click = false;
    }
}   
function ClicleameElCarrito() {
    if (clickCarr == false) {
        document.getElementById("carrito-cont").style.display = "flex";
        clickCarr = true;
    }
    else if (clickCarr == true) {
        document.getElementById("carrito-cont").style.display = "none";
        clickCarr = false;
    }
}   
function borraCarr(){
    document.getElementById("carrito-cont").style.display = "none"
}
var carrElements = document.getElementById("carrito-elements") 
function agregarCarro(element){
    var papi = element.parentNode.parentNode;
    var imgCarr = papi.querySelector(".imag").src;
    var name = papi.querySelector(".product-name").innerText;
    var precio = papi.querySelector(".precio").innerText;
    if(otroClick == false){
        document.getElementById("nada").style.display = 'none';
    carrElements.innerHTML += `<div class="cont-carrito-product">
    <div class="carrito-product">
        <div class="cantidad-cont">
            <button onclick="cantidadMenos(this)">-</button>
            <p>1</p>
            <button onclick="cantidadMas(this)"">+</button>
        </div>
        <img class="img-carr" src="${imgCarr}" alt="">
        <div class="info-carrito">
            <p>${name}</p>
            <p class="pe">${precio}</p>
        </div>
    </div>
</div>`
    }
    else if(otroClick == true){
        document.getElementById("nada").style.display = 'block';
    }
    else{
        carrElements.innerHTML += `<div class="cont-carrito-product">
    <div class="carrito-product">
        <div class="cantidad-cont">
            <button onclick="cantidadMenos(this)">-</button>
            <p>1</p>
            <button onclick="cantidadMas(this)"">+</button>
        </div>
        <img class="img-carr" src="${imgCarr}" alt="">
        <div class="info-carrito">
            <p>${name}</p>
            <p class="pe">${precio}</p>
        </div>
    </div>
</div>`
    }
}