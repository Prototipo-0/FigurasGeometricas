function on(){
    var seleccion = document.getElementById("contenido");
    seleccion.classList.add("on");
    seleccion.classList.add("off");
    var mFoto = document.getElementById("mFoto");
    mFoto.textContent = seleccion;
    if(seleccion == "on"){
        mFoto.src="img/pic_bulbon.gif"
    } else {
        mFoto.src="img/pic_bulboff.gif"
    }
}

function off(){
    var seleccion = document.getElementById("contenido");
    seleccion.classList.add("on");
    seleccion.classList.add("off");
    var mFoto = document.getElementById("mFoto");
    mFoto.textContent = seleccion;
    if(seleccion == "off"){
        mFoto.src="img/pic_bulboff.gif"
    } else {
        mFoto.src="img/pic_bulbon.gif"
    }
}