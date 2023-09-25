// Obtén una referencia a los elementos del DOM
const contadorElemento = document.getElementById('contador');
const incrementarBoton = document.getElementById('incrementar');
const disminuirBoton = document.getElementById('disminuir');
const resetearBoton = document.getElementById('resetear');

// Variable para llevar el seguimiento del contador
let contador = 0;
// Función para realizar las operaciones
function operacion(accion) {
    switch (accion) {
        case 'incrementar':
            contador++;
            break;
        case 'disminuir':
            contador--;
            break;
        case 'resetear':
            contador = 0;
            break;
    }
    contadorElemento.textContent = contador;
}

incrementarBoton.addEventListener('click', function(){operacion('incrementar');}) ;
disminuirBoton.addEventListener('click', function(){operacion('disminuir');}) ;
resetearBoton.addEventListener('click', function(){operacion('resetear');}) ;