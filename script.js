var menuDesplegables = document.querySelectorAll(".menu-desplegable");

menuDesplegables.forEach(function(menuDesplegable) {
    var botonMenu = menuDesplegable.querySelector(".boton-menu");
    var listaCategorias = menuDesplegable.querySelector(".lista-categorias");

    // Ocultar la lista al principio
    listaCategorias.style.display = "none";

    botonMenu.addEventListener("mouseenter", function() {
        listaCategorias.style.display = "block";
    });

    botonMenu.addEventListener("mouseleave", function() {
        listaCategorias.style.display = "none";
    });

    listaCategorias.addEventListener("mouseenter", function() {
        listaCategorias.style.display = "block";
    });

    listaCategorias.addEventListener("mouseleave", function() {
        listaCategorias.style.display = "none";
    });
}); 

function activar(elemento, nuevoColor) {
    elemento.style.backgroundColor = '#F0EBCE'; 
}
function desactivar(elemento) {
    elemento.style.backgroundColor = '';
}
