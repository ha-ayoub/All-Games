interface GameOverProps {
  won: boolean;
  word: string;
  onRestart: () => void;
}

export default function GameOver({ won, word, onRestart }: GameOverProps){
  return (
    <div className={`hangman-game-over ${won ? 'victory' : ''}`}>
      <h2>{won ? ' Bravo !' : ' Perdu !'}</h2>
      <p>{won ? 'Tu as trouvé le mot !' : `Le mot était : ${word}`}</p>
      <button className="hangman-btn-restart" onClick={onRestart}>
        {won ? ' Rejouer' : ' Réessayer'}
      </button>
    </div>
  );
};
