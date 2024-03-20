/*let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}*/
//Funcion que aplica las animaciones de las progress
function efectoprogress(){
    var skills = document.getElementById("skills");
    var longitud = window.innerHeight - skills.getBoundingClientRect().top;
    if(longitud >= 300){
        let progress = document.getElementsByClassName("progreso");
        progress[0].classList.add("javascript");
        progress[1].classList.add("html");
        progress[2].classList.add("sql");
        progress[3].classList.add("asp");
        progress[4].classList.add("ajax");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de progress
window.onscroll = function(){
    efectoprogress();
} 