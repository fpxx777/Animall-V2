var click = false;
var cat = document.getElementById("cat")

function ClicleameEsta(){
    if(click == false){
        cat.innerHTML = '<h3 onclick="ClicleameEsta()">Categorias ⮞</h3> <h3>Farmacia ⮞</h3> <h3>Espacial x ⮞</h3> <h3>Perros ⮞</h3> <h3>Gatos ⮞</h3> <h3>Exoticos ⮞</h3> <h3>Marcas ⮞</h3>';
        click = true;
    }
    else if(click == true){
        cat.innerHTML = '<h3 onclick="ClicleameEsta()">Categorias ⮞</h3>';
        click = false;
    }
}