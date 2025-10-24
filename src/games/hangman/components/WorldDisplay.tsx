interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

const WordDisplay= ({ word, guessedLetters }: WordDisplayProps) => {
  return (
    <div className="hangman-word-display">
      <div className="hangman-letters">
        {word.split('').map((letter, index) => {
          const revealed = guessedLetters.includes(letter);
          return (
            <div key={index} className={`hangman-letter-slot ${revealed ? 'revealed' : ''}`}>
              {revealed ? letter : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordDisplay;