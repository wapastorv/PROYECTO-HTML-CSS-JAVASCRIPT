import { WINNER_COMBOS } from "../constants"


export const checkWinnerFrom = (boardToCheack) => {
    //revisamos todas las conbinaciones ganadoras
    //para ver si X u O ganó
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] =combo
      if(
        boardToCheack[a] &&
        boardToCheack[a] === boardToCheack[b] &&
        boardToCheack[b] === boardToCheack[c]
      )
      return boardToCheack[a]
    }

    return null
  }

  export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // Si no hay más espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
  }