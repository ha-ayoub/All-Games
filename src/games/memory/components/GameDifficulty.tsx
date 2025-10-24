import type { DifficultyLevel } from "../utils/types";

interface GameDifficultyProps{
  levels: DifficultyLevel[]; 
  currentSize: number; 
  onDifficultyChange: (size: number) => void;
}

export default function GameDifficulty({ levels, currentSize, onDifficultyChange }: GameDifficultyProps) {
  return (
    <div className="memory-section">
      <h3>Difficulty</h3>
      <div className="memory-difficulty-list">
        {levels.map(level => (
          <button
            key={level.size}
            onClick={() => onDifficultyChange(level.size)}
            className={`memory-difficulty-item ${currentSize === level.size ? 'active' : ''}`}
          >
            <span className="memory-difficulty-label">{level.label}</span>
            <span className="memory-difficulty-grid">{level.grid}</span>
          </button>
        ))}
      </div>
    </div>
  )
}