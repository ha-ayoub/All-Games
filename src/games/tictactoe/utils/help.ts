import { COMB_WIN } from "./combWin";
import { INITIAL_BOARD } from "./constants";
import type { Turn } from "./types";

export function deriveActivePlayer(gameTurns: Turn[]): string {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

export function deriveGameBoard(gameTurns: Turn[]): (string | null)[][] {
  const gameBoard: (string | null)[][] = INITIAL_BOARD.map(array => [...array]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  } 
  return gameBoard;
}

export function deriveWinner(
  gameBoard: (string | null)[][], 
  players: Record<string, string>
): string | undefined {

  let winner: string | undefined;

  for (const combination of COMB_WIN) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}