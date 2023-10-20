function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

function obtenerDatosAutomovil() {
    alert("Ingresar los datos del automóvil");
    let marca = prompt("Marca: ");
    let modelo = prompt("Modelo: ");
    let annio = prompt("Año: ");
    return { marca, modelo, annio };
}

function registrarAutomovil() {
    const datosAutomovil = obtenerDatosAutomovil();
    const autoNuevo = new Auto(datosAutomovil.marca, datosAutomovil.modelo, datosAutomovil.annio);
    return autoNuevo;
}

const autos = [];
const cantidadDeAutosSolicitados = prompt("Cuantos autos va a registrar: ");

if (!Number.isNaN(cantidadDeAutosSolicitados) && cantidadDeAutosSolicitados > 0) {
    for (let i = 0; i < cantidadDeAutosSolicitados; i++) {
        const auto = registrarAutomovil();
        autos.push(auto);
    }

    console.log(autos);
} else {
    console.log("La cantidad ingresada no es válida.");
}
