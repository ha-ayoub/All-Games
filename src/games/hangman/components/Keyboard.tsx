import { ALPHABET } from "../utils/constants";

interface KeyboardProps {
  onLetterClick: (letter: string) => void;
  guessedLetters: string[];
  word: string;
  disabled: boolean;
}

const Keyboard = ({ onLetterClick, guessedLetters, word, disabled }: KeyboardProps) => {
  if (disabled) return null;

  return (
    <div className="hangman-keyboard">
      {ALPHABET.map(letter => {
        const guessed = guessedLetters.includes(letter);
        const correct = word.includes(letter);
        const className = guessed ? (correct ? 'hangman-key correct' : 'hangman-key incorrect') : 'hangman-key';
        
        return (
          <button
            key={letter}
            className={className}
            onClick={() => onLetterClick(letter)}
            disabled={guessed}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
