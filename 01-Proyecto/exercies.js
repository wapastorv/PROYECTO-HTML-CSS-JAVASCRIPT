class JuegoPiedraPapelTijera {
    constructor() {
      this.opciones = ["piedra", "papel", "tijera"];
    }
  
    obtenerOpcionComputadora() {
      return this.opciones[Math.floor(Math.random() * 3)];
    }
  
    obtenerOpcionUsuario() {
      const opcionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
  
      if (!this.opciones.includes(opcionUsuario)) {
        throw new Error("Elección no válida. Elige piedra, papel o tijera.");
      }
  
      return opcionUsuario;
    }
  
    determinarResultado(opcionUsuario, opcionComputadora) {
      if (opcionUsuario === opcionComputadora) {
        return "Es un empate.";
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
  
    jugar() {
      const opcionUsuario = this.obtenerOpcionUsuario();
      const opcionComputadora = this.obtenerOpcionComputadora();
  
      console.log(`Computadora eligió: ${opcionComputadora}`);
      console.log(`Tú elegiste: ${opcionUsuario}`);
  
      const resultado = this.determinarResultado(opcionUsuario, opcionComputadora);
      console.log(resultado);
    }
  }
  
  // Crear una instancia del juego y jugar
  const juego = new JuegoPiedraPapelTijera();
  juego.jugar();