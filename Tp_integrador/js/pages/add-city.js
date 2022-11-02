const botonAgregar = document.getElementById("btnagregar");
const nombreCiudad = document.getElementById("ingresoCiudad");
const mensajeExito = document.getElementById("message-success");
const mensajeError = document.getElementById("message-error");
const mensajeRepetido = document.getElementById("message-repeat");
const loaderAgregar = document.getElementById("loaderAgregar");



function obtenerCiudadLocalStorage(){
    let ciudades = localStorage.getItem("CIUDADES");
    if(ciudades){
        ciudades= JSON.parse(ciudades);
    } 
    else{
        ciudades = [];
    }
    return ciudades;
}

function agregarCiudadLocalStorage(){
    let ciudades = obtenerCiudadLocalStorage();
    let ciudadNueva = validarInput();

    loaderAgregar.style.display = "block";
    setTimeout(function myfunction() { loaderAgregar.style.display = "none" }, 2000);
    if(ciudadNueva != 1) {
        ciudades.push(ciudadNueva);
        localStorage.setItem("CIUDADES", JSON.stringify(ciudades));
        setTimeout(function myfunction() { mensajeExito.style.display = "block" }, 2000);
        setTimeout(function myfunction() { mensajeExito.style.display = "none" }, 2000);
    }
    limpiarInput()
    console.log(ciudades);
}

function validarInput(){
    let ciudades = obtenerCiudadLocalStorage();
    let resultado = true;
    let ciudadNueva;
    if (nombreCiudad.value == ""){
        resultado = false;
        alert("Tiene que ingresar el nombre de la ciudad :)");
    }
    if(ciudades.includes(nombreCiudad.value)){
        resultado = false;
        setTimeout(function myfunction() { mensajeRepetido.style.display = "block" }, 2000);
        setTimeout(function myfunction() { mensajeRepetido.style.display = "none" }, 2000);
    }
    if (resultado){
        ciudadNueva = nombreCiudad.value;
        return ciudadNueva
    }
    else{
        ciudadNueva=1;
        return ciudadNueva
    }
}
function limpiarInput(){
    nombreCiudad.value="";
}

async function validarAPI() {
    try {
        const respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + nombreCiudad.value + '&appid=c2175e7292294a8a624f2d44ac9fe691');
        const datos = await respuesta.json()
        if(datos.cod==404){
            setTimeout(function myfunction() { mensajeError.style.display = "block" }, 2000);
            setTimeout(function myfunction() { mensajeError.style.display = "none" }, 2000);
        }
        else{
            agregarCiudadLocalStorage();
            setTimeout(function myfunction() { mensajeExito.style.display = "block" }, 2000);
            setTimeout(function myfunction() { mensajeExito.style.display = "none" }, 2000);
        }
    }
    catch (error) {
        setTimeout(function myfunction() { mensajeError.style.display = "block" }, 2000);
        setTimeout(function myfunction() { mensajeError.style.display = "none" }, 2000);

    }
} 
