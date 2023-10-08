const  juegos=["tijera", "piedra", "papel" ];



function priedraPapelTijera(playerTwo){
    
    let playerOne = juegos[Math.floor(Math.random() * juegos.length)];

    if (playerTwo === playerOne ){
        console.log(" Empate sacaron lo mismo: "+ playerTwo);
    }else if( (playerTwo === juegos[0] && playerOne === juegos[2]) || (playerTwo === juegos[1] && playerOne === juegos[0]) || (playerTwo === juegos[2] && playerOne === juegos[1]) ){
        console.log("Ganas!! la PC saco: " +playerOne);
    } else{
        console.log("Pirdes!! la PC saco: " +playerOne);
    }
}

priedraPapelTijera("piedra")
priedraPapelTijera("papel")
priedraPapelTijera("tijera")