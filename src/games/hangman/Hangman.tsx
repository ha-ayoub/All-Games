import { useEffect, useState } from 'react'
import { MAX_ERRORS, THEMES } from './utils/constants';
import type { GameState, Theme } from './utils/types';
import ThemeSelector from './components/ThemeSelector';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import GameHeader from './components/GameHeader';
import GameArea from './components/GameArea';
import './styles/Hangman.css'
import { usePageMeta } from '../../hooks/usePageMeta';
import HangmanIcon from '../../../public/Hangman-icon.png';


function Hangman() {
    const [theme, setTheme] = useState<Theme>('pays');

    const [gameState, setGameState] = useState<GameState>({
        word: '',
        guessedLetters: [],
        errors: 0,
        gameOver: false,
        won: false
    });

    const initGame = () => {
        const words = THEMES[theme];
        const randomWord = words[Math.floor(Math.random() * words.length)];

        setGameState({
            word: randomWord,
            guessedLetters: [],
            errors: 0,
            gameOver: false,
            won: false
        });
    };

    usePageMeta("Univers Arcadia - Hangman", HangmanIcon);

    useEffect(() => {
        initGame();
    }, [theme]);

    const handleLetterClick = (letter: string) => {
        if (gameState.gameOver || gameState.guessedLetters.includes(letter)) return;

        const newGuessedLetters = [...gameState.guessedLetters, letter];
        let newErrors = gameState.errors;

        if (!gameState.word.includes(letter)) {
            newErrors++;
        }

        setGameState(prev => ({
            ...prev,
            guessedLetters: newGuessedLetters,
            errors: newErrors
        }));
    };

    useEffect(() => {
        if (!gameState.word) return;

        if (gameState.errors >= MAX_ERRORS) {
            setGameState(prev => ({ ...prev, gameOver: true, won: false }));
        } else if (gameState.word.split('').every(letter => gameState.guessedLetters.includes(letter))) {
            setGameState(prev => ({ ...prev, gameOver: true, won: true }));
        }
    }, [gameState.guessedLetters, gameState.errors, gameState.word]);


    return (
        <div className='hangman-app'>
            <div className="hangman-game-container">
                <GameHeader />
                <ThemeSelector
                    currentTheme={theme}
                    onThemeChange={setTheme}
                />
                
                <GameArea gameState={gameState} />

                <Keyboard
                    onLetterClick={handleLetterClick}
                    guessedLetters={gameState.guessedLetters}
                    word={gameState.word}
                    disabled={gameState.gameOver}
                />

                {gameState.gameOver && (
                    <GameOver
                        won={gameState.won}
                        word={gameState.word}
                        onRestart={initGame}
                    />
                )}
            </div>
        </div>

    )
}

export default Hangman;