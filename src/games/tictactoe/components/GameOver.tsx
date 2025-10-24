import type { GameOverProps } from "../utils/types";

export default function GameOver({ winner, onRematch }: GameOverProps) {
  return (
    <div className="tictactoe-game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a DRAW!</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}