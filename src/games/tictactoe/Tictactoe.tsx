import { useState } from "react";
import type { Turn } from "./utils/types";
import {  PLAYERS } from "./utils/constants";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./utils/help";
import Player from "./components/Player";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import "./styles/Tictactoe.css";

function TicTacToe() {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns: Turn[] = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol: string, newName: string) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <div className="tictactoe-game">
      <Header />
      
      <main>
        <div className="tictactoe-game-container">
          <ol className="tictactoe-players highlight-player">
            <Player 
              initialName={PLAYERS.X} 
              symbol="X" 
              isActive={activePlayer === 'X'} 
              onChangeName={handlePlayerNameChange} 
            />
            <Player 
              initialName={PLAYERS.O} 
              symbol="O" 
              isActive={activePlayer === 'O'} 
              onChangeName={handlePlayerNameChange} 
            />
          </ol>
          
          <Board onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
          {(winner || hasDraw) && (<GameOver winner={winner} onRematch={handleRematch} /> )}
        </div>        
      </main>
    </div>
  );
}

export default TicTacToe;