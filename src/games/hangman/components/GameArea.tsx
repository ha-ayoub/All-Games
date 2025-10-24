import { MAX_ERRORS } from "../utils/constants";
import type { GameState } from "../utils/types";
import Hangman from "./Hangman";
import Stats from "./Stats";
import WordDisplay from "./WorldDisplay";

interface GameAreaProps{
   gameState: GameState; 
}

export default function GameArea({ gameState }: GameAreaProps) {
    return (
        <div className="hangman-game-area">
            <Hangman errors={gameState.errors} />
            <div className="hangman-info-section">
                <Stats errors={gameState.errors} maxErrors={MAX_ERRORS} />
                <WordDisplay word={gameState.word} guessedLetters={gameState.guessedLetters} />
            </div>
        </div>
    )
}