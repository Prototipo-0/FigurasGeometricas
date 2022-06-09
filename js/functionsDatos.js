//Capturar datos
function capturarDatos(){

    //Capturar los valores de cada uno de los campos del formulario.

    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    //Capturamos los elementos a los cuales les sera asignado los valores.
    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombre");
    var mDescripcion = document.getElementById("mDescripcion");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");
//Fondo
    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mDescripcion.textContent = descripcion;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
//Imagen
    if (genero == "Masculino") {
        mFoto.src="img/userMasculino.png"
    } else if(genero == "Femenino"){
        mFoto.src="img/userFemenino.png"
    } else {
        mFoto.src = "img/userOtro.png"
    }
//Color
switch(color) {
    case "Gris":
       var contenedor = document.getElementById("contAvatar");
       contenedor.classList.add("Gris");
        break;
    case "Blanco":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Blanco")
        break;
    case "Azul":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Azul")
        break;
    case "Rojo":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Rojo")
        break;
    case "Amarillo":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Amarillo")
        break;
  }
}