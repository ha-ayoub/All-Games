import { useState } from "react";
import type { PlayerProps } from "../utils/types";

export default function Player({ initialName, symbol, isActive, onChangeName }: PlayerProps) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChangeName(ev: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(ev.target.value);
  }

  let editPlayerName = <span className="tictactoe-player-name">{playerName}</span>;
  
  if (isEditing) {
    editPlayerName = (
      <input 
        type="text" 
        defaultValue={playerName} 
        onChange={handleChangeName} 
        required 
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="tictactoe-player">
        {editPlayerName}
        <span className="tictactoe-player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}