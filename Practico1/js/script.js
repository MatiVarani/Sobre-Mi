function funcionesDisponibles() {
    let option = readlineSync.question(
        'Las operaciones disponibles son: \n' +
        '(1) Suma \n' +
        '(2) Resta \n' +
        '(3) Multiplicacion \n' +
        '(4) Division \n' +
        '(5) Promedio \n' +
        '(6) Desviacion Estandar \n' +
        '(7) Factorial \n' +
        'Por favor ingrese el numero de la operacion que desea realizar: '
    );
    return Number(option);
}

function suma(numeros) {
    // let resultado = 0;
    // for (let i = 0; i < numeros.length; i++) {
    //     resultado += numeros[i];
    // }
    // return resultado;

    return numeros.reduce((resultado, e) => resultado + e, 0);
}

function resta(numeros) {
    // let resultado = numeros.shift();
    // for (let i = 0; i < numeros.length; i++) {
    //     resultado -= numeros[i];
    // }
    // return resultado;

    let valorInicial = numeros.shift();
    return numeros.reduce((resultado, e) => resultado - e, valorInicial);
}

function multiplicacion(numeros) {
    // let resultado = 1;
    // for (let i = 0; i < numeros.length; i++) {
    //     resultado *= numeros[i];
    // }
    // return resultado;

    return numeros.reduce((resultado, e) => resultado * e, 1);
}

function division(numeros) {
    // [2, 3, 4, 5] => ((2 / 3) / 4) / 5
    // let resultado = numeros.shift();
    // for (let i = 0; i < numeros.length; i++) {
    //     resultado /= numeros[i];
    // }
    // return resultado;

    let valorInicial = numeros.shift();
    return numeros.reduce((resultado, e) => resultado / e, valorInicial);
}

function promedio(numeros) {
    // let resultado = 0;
    // for (let i = 0; i < numeros.length; i++) {
    //     resultado += numeros[i];
    // }
    // resultado /= numeros.length;
    // return resultado;

    let sum = suma(numeros);
    return sum / numeros.length;
}

function desviacionEstandar(numeros) {
    let prom = promedio(numeros);
    let N = numeros.length;
    let sum = 0;

    for (let i = 0; i < N; i++) {
        sum += (numeros[i] - prom)**2;
    }
    sum /= N;
    return Math.sqrt(sum);
}

function factorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularResultado(option, numeros) {
    let resultado;
    switch (parseInt(option)) {
        case 1:
            resultado = suma(numeros);
            break;
        case 2:
            resultado = resta(numeros);
            break;
        case 3:
            resultado = multiplicacion(numeros);
            break;
        case 4:
            resultado = division(numeros);
            break;
        case 5:
            resultado = promedio(numeros);
            break;
        case 6:
            resultado = desviacionEstandar(numeros);
            break;
        case 7:
            resultado = factorial(numeros);
    }
    return resultado;
}

function main() {
    let funcionElegida = funcionesDisponibles();
    while (![1, 2, 3, 4, 5, 6, 7].includes(funcionElegida)) {
        console.clear();
        console.log("La opcion ingresada es incorrecta, por favor ingrese nuevamente");
        funcionElegida = funcionesDisponibles();
    }

    if (funcionElegida === 7) {
        numero = readlineSync.questionFloat('Ingrese un numero: ');
        resultado = factorial(numero);
    } else {
        let numeroOperaciones = readlineSync.questionInt("Ingrese la cantidad de numeros a operar: ");
        let numeros = [];
        let numero;
        for (let i = 0; i < numeroOperaciones; i++) {
            numero = readlineSync.questionFloat('Ingrese un numero: ');
            numeros.push(numero);
        }
        resultado = calcularResultado(funcionElegida, numeros);
    }

    console.log(`El resultado de la operacion es: ${resultado}`);
}

main();
