//Funcion para obtener operacion
function operador(){
    let operador = document.getElementById("operador").value;
    if (operador === "suma"){
        return option = 1;
    }    else if (operador === "resta"){
        return option = 2;
    }    else if (operador === "multiplicacion"){
        return option = 3;
    }    else if (operador === "division"){
        return option = 4;
    }    else if (operador === "promedio"){
        return option = 5;
    }
}

//Funcion calculo Suma
function suma(x, y) {
    return x + y;
}

//Funcion calculo resta
function resta(x, y) {
    return x - y;
}

//Funcion calculo multiplicacion
function multiplicacion(x, y) {
    return x * y;
}

 //Funcion calculo divion
function division(x, y) {
    if (y==0){
    window.alert("No es posible dividir por cero, ingrese otro numero en operando 2.");  //Alerta division por cero.
    }else{
    return x / y;
}
}

 //Funcion calculo promedio
function promedio(x, y) {
    return (x + y) / 2;
}

 //Funcion Calcular el resultado, con la operacion seleccionada y los operandos ingresados.
function calcularResultado(option, num1, num2) {
    switch (parseInt(option)) {
        case 1:
            resultado = suma(num1, num2);
            break;
        case 2:
            resultado = resta(num1, num2);
            break;
        case 3:
            resultado = multiplicacion(num1, num2);
            break;
        case 4:
            resultado = division(num1, num2);
            break;
        case 5:
            resultado = promedio(num1, num2);
            break;
        }
    return resultado;
}

 //Funcion Borrar los operandos
function borrar() {
    document.getElementById("operando1").value = "";
    document.getElementById("operando2").value = "";
}

 //Funcion Principal
function main() {
    
    let num1 = parseFloat(document.getElementById("operando1").value); //Obtiene los operando
    let num2 = parseFloat(document.getElementById("operando2").value); //Obtiene los operando

    operador(); //Ejectura la funcion operador para obtener la operacion seleccionada

    if (isNaN(num1)) {
        window.alert("Por favor, Ingrese un valor numerico en operando 1."); //Alerta, si los operando no son numericos
    } else if (isNaN(num2)){
        window.alert("Por favor, Ingrese un valor numerico en operando 2."); //Alerta, si los operando no son numericos
    } else{
        let resultado = calcularResultado(option, num1, num2); //Si son numericos ejecuta la funcion calcular resultado.
        let parrafoResultado = document.getElementById("resultado"); //Obtiene el parrafo de resultado.
        parrafoResultado.innerHTML = "Resultado: " + resultado; //Devuelve el parrafo de resultado + el resultado de la operacion. 
    }
}