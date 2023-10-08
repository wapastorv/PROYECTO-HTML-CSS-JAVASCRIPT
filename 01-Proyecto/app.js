const opciones = ["piedra", "papel", "tijera"];

function obtenerOpcionComputadora() {
    return opciones[Math.floor(Math.random() * 3)];
}

function determinarResultado(opcionUsuario, opcionComputadora) {
    if (opcionUsuario === opcionComputadora) {
        return "¡Es un empate!";
    } else if (
        (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
        (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
        (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "La computadora gana.";
    }
}

function jugar(opcionUsuario) {
    const opcionComputadora = obtenerOpcionComputadora();
    const resultado = determinarResultado(opcionUsuario, opcionComputadora);
    
    document.getElementById("resultado").textContent = `Computadora eligió: ${opcionComputadora}. ${resultado}`;
}

document.getElementById("piedra").addEventListener("click", () => jugar("piedra"));
document.getElementById("papel").addEventListener("click", () => jugar("papel"));
document.getElementById("tijera").addEventListener("click", () => jugar("tijera"));