var menuDesplegables = document.querySelectorAll(".menu-desplegable");

menuDesplegables.forEach(function (menuDesplegable) {
    var botonMenu = menuDesplegable.querySelector(".boton-menu");
    var listaCategorias = menuDesplegable.querySelector(".lista-categorias");

    // Ocultar la lista al principio
    listaCategorias.style.display = "none";

    botonMenu.addEventListener("mouseenter", function () {
        listaCategorias.style.display = "block";
    });

    botonMenu.addEventListener("mouseleave", function () {
        listaCategorias.style.display = "none";
    });

    listaCategorias.addEventListener("mouseenter", function () {
        listaCategorias.style.display = "block";
    });

    listaCategorias.addEventListener("mouseleave", function () {
        listaCategorias.style.display = "none";
    });
});

function resaltarElemento(elemento) {
    elemento.classList.add("resaltado"); 
}
function restaurarElemento(elemento) {
    elemento.classList.remove("resaltado"); 
}
var sum = 0
function suma() {
    sum = sum + 1;
    var num = document.getElementById("numero")
    num.innerHTML = sum;
}
function resta() {
    if (sum > 0) {
        sum = sum - 1;
        var num = document.getElementById("numero")
        num.innerHTML = sum;
    }
}