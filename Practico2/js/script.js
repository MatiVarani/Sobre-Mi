// Declaracion de Variables
let jugadaComputadora;
let jugadaUsuario;
let jugadaComputadoraN;
let jugadaUsuarioN;
let resultado;
let cantidad;
let cantidadTotal;
let acuUsuario = 0;
let acuComputadora = 0;
let nombre = "";

const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
const jugadas = [piedra, papel, tijera];

const jugoPiedra = document.getElementById("piedra");
const jugoPapel = document.getElementById("papel");
const jugoTijera = document.getElementById("tijera");

// Se detectan 3 eventos diferentes por cada eleccion del jugador y ejecutan las funciones correspondientes.
    jugoPiedra.addEventListener("click", function() {
        if(document.getElementById("canJugadas").value == 0){
        window.alert("Por Favor, selecciones la cantidad de partidas que desea jugar.")
        }else if (nombre == ""){
            window.alert("Por favor, Ingrese el Nombre del Jugador");
            obtNombre();
        } else{
        jugadaUsuarioN = 0;
        --cantidad;
        document.getElementById("imgjugador").src="img/Piedra.png";
        obtenerJugadaComputadora();
        determinarGanador(jugadaComputadoraN,jugadaUsuarioN);
        ganadorParcial()
        ultimaJugada();
        return cantidad;
        }
    });

    jugoPapel.addEventListener("click", function() {
        if(document.getElementById("canJugadas").value == 0){
            window.alert("Por Favor, selecciones la cantidad de partidas que desea jugar.")
        }else if (nombre == ""){
            window.alert("Por favor, Ingrese el Nombre del Jugador");
            obtNombre();
        } else{
        jugadaUsuarioN = 1;
        --cantidad;
        document.getElementById("imgjugador").src="img/papel.png";
        obtenerJugadaComputadora();
        determinarGanador(jugadaComputadoraN,jugadaUsuarioN);
        ganadorParcial()
        ultimaJugada();
        return cantidad;
        }
    });

    jugoTijera.addEventListener("click", function() {
        if(document.getElementById("canJugadas").value == 0){
            window.alert("Por Favor, selecciones la cantidad de partidas que desea jugar.")
        }else if (nombre == ""){
            window.alert("Por favor, Ingrese el Nombre del Jugador");
            obtNombre();
        } else{
        jugadaUsuarioN = 2;
        --cantidad;
        document.getElementById("imgjugador").src="img/tijera.png";
        obtenerJugadaComputadora();
        determinarGanador(jugadaComputadoraN,jugadaUsuarioN);
        ganadorParcial()
        ultimaJugada();
        return cantidad;
        }
    });

//Determinar cantidad de partidas y resetea los contadores y resultados.
function partidas(){
    cantidad = document.getElementById("canJugadas").value;
    cantidadTotal = document.getElementById("canJugadas").value;
    document.getElementById("resultadoParcial").innerHTML = ""
    document.getElementById("resultado").innerHTML = ""
    document.getElementById("resNJug").innerHTML = 0;
    document.getElementById("resNPC").innerHTML = 0;
    acuUsuario = 0;
    acuComputadora = 0;
    return cantidad;
}

//Ejecuta prompt para nombre del usuario y verifica que no sea vacio o espacios. 
function obtNombre(){
    nombre = prompt("Ingrese Nombre del Jugador:");
    if (nombre.trim() == "") {
        window.alert("Por favor, Ingrese un Nombre de Jugador válido");
        obtNombre();
    }else{
        jugador.innerHTML = nombre;
        btnNombre.innerHTML = "Cambiar Jugador";
    }
}

//Obtiene la jugada de la computadora, la muestra en la web y cambia la imagen de jugada. 
function obtenerJugadaComputadora(){
    jugadaComputadoraN = Math.floor(Math.random()*3);
    jugadaComputadora = jugadas[jugadaComputadoraN];
    let parrafoResultado = document.getElementById("PCjugada");
    parrafoResultado.innerHTML = jugadaComputadora[0].toUpperCase() + jugadaComputadora.substring(1);
    if (jugadaComputadora == "piedra"){
        document.getElementById("imgcomputadora").src="img/piedra.png";
    }else if (jugadaComputadora == "papel"){
        document.getElementById("imgcomputadora").src="img/papel.png";
    }else if (jugadaComputadora == "tijera"){
        document.getElementById("imgcomputadora").src="img/tijera.png";
    }
}

//Determina si hay empato o el ganador de la partida
function determinarGanador(jugadaComputadoraN,jugadaUsuarioN){
    let resultadoParcial = document.getElementById("resultadoParcial");
    let resultadoJugadorN = document.getElementById("resNJug");
    let resultadoComputadoraN = document.getElementById("resNPC");
    nombre = jugador.innerHTML;

    if (jugadaComputadoraN === jugadaUsuarioN){
        resultadoParcial.innerHTML = "Partida: Empate";

    }else if (jugadaComputadoraN === 0 && jugadaUsuarioN === 1 || 
              jugadaComputadoraN === 1 && jugadaUsuarioN === 2 || 
              jugadaComputadoraN === 2 && jugadaUsuarioN === 0){
        acuUsuario ++;
        resultadoParcial.innerHTML = "Partida: Ganó " + nombre;
        resultadoJugadorN.innerHTML = acuUsuario;

    }else {
        acuComputadora ++;
        resultadoParcial.innerHTML = "Partida: Ganó Computadora"
        resultadoComputadoraN.innerHTML = acuComputadora;
    }
}

//Obtiene el resultado final de todas las partidas
function ObtResultado(){
    let resultado = document.getElementById("resultado");
    if (acuComputadora === acuUsuario){
        resultado.innerHTML = "Resultado Final: Empate"
    
    }else if (acuComputadora < acuUsuario){
        resultado.innerHTML = "Resultado Final: Ganó " + nombre;

    
    }else {
        resultado.innerHTML = "Resultado Final: Ganó Computadora"

    }
}

//determina si es la ultima partida de las seleccionadas
function ultimaJugada(){
    if (cantidad == 0){
    ObtResultado();
    document.getElementById("canJugadas").value = 0;
}
}

//Comprueba si existe un ganador parcial (ganó mas de la mitad de partidas)
function ganadorParcial(){
    if (acuComputadora > cantidadTotal/2 ||  acuUsuario > cantidadTotal/2){
    ObtResultado();
    document.getElementById("canJugadas").value = 0;
}
}

//reset a los contadores y resultados de la pagina web.
function borrar(){
    document.getElementById("canJugadas").value = 0;
    document.getElementById("resNJug").innerHTML = 0;
    document.getElementById("resNPC").innerHTML = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultadoParcial").innerHTML = "";
    acuUsuario = 0;
    acuComputadora = 0;
}