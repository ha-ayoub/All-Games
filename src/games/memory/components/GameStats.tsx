import { formatTime } from "../utils/helpers";
import type { GameScore } from "../utils/types";

interface GameStatsProps{
  time: number;
  moves: number;
  matchedCount: number;
  totalPairs: number;
  bestScore: GameScore | null;
}

export default function GameStats({ time, moves, matchedCount, totalPairs, bestScore }: GameStatsProps) {
  return (
    <div className="memory-section memory-stats-section">
      <h3>Statistics</h3>
      <div className="memory-stat-list">
        <div className="memory-stat-row">
          <span className="memory-stat-icon">⏱️</span>
          <span className="memory-stat-value">{formatTime(time)}</span>
          <span className="memory-stat-label">Time</span>
        </div>
        <div className="memory-stat-row">
          <span className="memory-stat-icon">🎯</span>
          <span className="memory-stat-value">{moves}</span>
          <span className="memory-stat-label">Blows</span>
        </div>
        <div className="memory-stat-row">
          <span className="memory-stat-icon">✅</span>
          <span className="memory-stat-value">{matchedCount / 2}/{totalPairs}</span>
          <span className="memory-stat-label">Pairs</span>
        </div>
        {bestScore && (
          <div className="memory-stat-row highlight">
            <span className="memory-stat-icon">🏆</span>
            <span className="memory-stat-value">{formatTime(bestScore.time)}</span>
            <span className="memory-stat-label">Record</span>
          </div>
        )}
      </div>
    </div>
  )
}