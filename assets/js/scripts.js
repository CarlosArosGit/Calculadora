//VARIABLES GLOBALES
var numeros = [];
var operacion = '';
var resultado = 0;

//FUNCION PRINCIPAL DE ASIGNACION DE FUNCIONES
function asignarFunciones() {
    var btnUno = document.getElementById('uno');
    btnUno.addEventListener('click', accionUno);
    var btnDos = document.getElementById('dos');
    btnDos.addEventListener('click', accionDos);
    var btnTres = document.getElementById('tres');
    btnTres.addEventListener('click', accionTres);
    var btnCuatro = document.getElementById('cuatro');
    btnCuatro.addEventListener('click', accionCuatro);
    var btnCinco = document.getElementById('cinco');
    btnCinco.addEventListener('click', accionCinco);
    var btnSeis = document.getElementById('seis');
    btnSeis.addEventListener('click', accionSeis);
    var btnSiete = document.getElementById('siete');
    btnSiete.addEventListener('click', accionSiete);
    var btnOcho = document.getElementById('ocho');
    btnOcho.addEventListener('click', accionOcho);
    var btnNueve = document.getElementById('nueve');
    btnNueve.addEventListener('click', accionNueve);
    var btnCero = document.getElementById('cero');
    btnCero.addEventListener('click', accionCero);
    var btnDot = document.getElementById('dot');
    btnDot.addEventListener('click', accionDot);
    var btnLimpiar = document.getElementById('clear');
    btnLimpiar.addEventListener('click', accionLimpiar);
    var btnSumar = document.getElementById('sumar');
    btnSumar.addEventListener('click', accionSumar);
    var btnRestar = document.getElementById('restar');
    btnRestar.addEventListener('click', accionRestar);
    var btnMultiplicar = document.getElementById('multiplicar');
    btnMultiplicar.addEventListener('click', accionMultiplicacion);
    var btnDivision = document.getElementById('dividir');
    btnDivision.addEventListener('click', accionDivision);
    var btnIgual = document.getElementById('igual');
    btnIgual.addEventListener('click', accionIgual);
}
function recuperarPantalla() {
    var pantalla = document.getElementById('resultado').value;
    pantalla = pantalla.slice(0, 12);
    return pantalla;
}

//FUNCIONES NUMEROS
function accionUno() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '1';
        pantalla.value = valorActual;
    }
}
function accionDos() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '2';
        pantalla.value = valorActual;
    }
}
function accionTres() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '3';
        pantalla.value = valorActual;
    }
}
function accionCuatro() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '4';
        pantalla.value = valorActual;
    }
}
function accionCinco() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '5';
        pantalla.value = valorActual;
    }
}
function accionSeis() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '6';
        pantalla.value = valorActual;
    }
}
function accionSiete() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '7';
        pantalla.value = valorActual;
    }
}
function accionOcho() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '8';
        pantalla.value = valorActual;
    }
}
function accionNueve() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();
    if (valorPantalla.length < 12) {
        var valorActual = valorPantalla + '9';
        pantalla.value = valorActual;
    }
}
function accionCero() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();

    if (valorPantalla.length < 12 && valorPantalla != '0') {
        var valorActual = valorPantalla + '0';
        pantalla.value = valorActual;
    }
}

// FUNCIONES EXTRAS
function accionDot() {
    var pantalla = document.getElementById('resultado');
    var valorPantalla = recuperarPantalla();

    if (valorPantalla.length < 12 && valorPantalla != '.' && valorPantalla.length != 0) {
        var valorActual = valorPantalla + '.';
        pantalla.value = valorActual;
    }
}
function accionLimpiar() {
    var pantalla = document.getElementById('resultado');
    pantalla.value = '';
}
function recuperarDatos() {
    var numeroIngresado = recuperarPantalla();
    numeros.push(numeroIngresado);
    accionLimpiar();
}
function enviarResulado(resultado) {
    var pantalla = document.getElementById('resultado');
    var resultadoString = resultado.toString();
    pantalla.value = resultadoString;
}
function despuesDeIgual(){
    numeros = [];
    operacion = '';
    resultado = 0;
}

// FUNCIONES DE OPERACIONES
function accionSumar() {
    operacion = '+';
    recuperarDatos();
}
function accionRestar() {
    operacion = '-';
    recuperarDatos();
}
function accionMultiplicacion() {
    operacion = '*';
    recuperarDatos();
}
function accionDivision() {
    operacion = '/';
    recuperarDatos();
}
function accionIgual() {
    recuperarDatos();
    if (operacion != '') {
        if (operacion == '+') {
            var cont = 0;
            for (var index = 0; index < numeros.length; index++) {
                var num = numeros[index];
                cont++;
                if (num.includes('.')) {
                    if (cont == 1) {
                        resultado = parseFloat(num);
                    } else if (cont != 1) {
                        resultado = resultado + parseFloat(num);
                    }

                } else {
                    resultado = resultado + parseInt(num);
                }
            }
            enviarResulado(resultado);
            despuesDeIgual();
        } else if (operacion == '-') {
            var cont = 0;
            for (var index = 0; index < numeros.length; index++) {
                cont++;
                var num = numeros[index];
                if (num.includes('.')) {
                    if (cont == 1) {
                        resultado = parseFloat(num);
                    } else if (cont != 1) {
                        resultado = resultado - parseFloat(num);
                    }
                } else {
                    if (cont == 1) {
                        resultado = parseInt(num);
                    } else if (cont != 1) {
                        resultado = resultado - parseInt(num);
                    }
                }

            }
            enviarResulado(resultado);
            despuesDeIgual();
        } else if (operacion == '*') {
            var cont = 0;
            for (var index = 0; index < numeros.length; index++) {
                cont++;
                var num = numeros[index];
                if (num.includes('.')) {
                    if (cont == 1) {
                        resultado = parseFloat(num);
                    } else if (cont != 1) {
                        resultado = resultado * parseFloat(num);
                    }
                } else {
                    if (cont == 1) {
                        resultado = parseInt(num);
                    } else if (cont != 1) {
                        resultado = resultado * parseInt(num);
                    }
                }
            }
            enviarResulado(resultado);
            despuesDeIgual();
        } else if (operacion == '/') {
            var cont = 0;
            for (var index = 0; index < numeros.length; index++) {
                cont++;
                var num = numeros[index];
                if (num.includes('.')) {
                    if (cont == 1) {
                        resultado = parseFloat(num);
                    } else if (cont != 1) {
                        resultado = resultado / parseFloat(num);
                    }
                } else {
                    if (cont == 1) {
                        resultado = parseInt(num);
                    } else if (cont != 1) {
                        resultado = resultado / parseInt(num);
                    }
                }
            }
            enviarResulado(resultado);
            despuesDeIgual();
        }
    } else {
        accionLimpiar();
    }
}
