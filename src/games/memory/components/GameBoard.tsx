import { DIFFICULTY_LEVELS } from "../utils/constants";
import type { Card, Theme } from "../utils/types";
import GameCard from "./GameCard";

interface GameBoardProps {
    currentTheme: Theme;
    deck: Card[];
    size: number;
    flipped: string[];
    onCardClick: (card: Card) => void;
}

export default function GameBoard({ currentTheme, deck, size, flipped, onCardClick }: GameBoardProps) {

    const currentLevel = DIFFICULTY_LEVELS.find(l => l.size === size);

    return (
        <main className="memory-game-area">
            <div className="memory-game-header">
                <div className="memory-game-info">
                    <h2>Game in progress</h2>
                    <p>{currentLevel?.label} • {currentTheme.name}</p>
                </div>
            </div>
            <div className="memory-board-wrapper">
                <div className={`memory-board memory-board-${size}`}>
                    {deck.map(c => (
                        <GameCard
                            key={c.id}
                            card={c}
                            flipped={flipped.includes(c.id) || c.matched}
                            onClick={() => onCardClick(c)}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}