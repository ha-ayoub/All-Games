import { useState } from "react";
import { CHOICES, RESULT_TYPES, type ResultType } from "./utils/constants";
import { determineWinner, getRandomChoice } from "./utils/gameLogic";
import type { Choice, score } from "./utils/types";
import BattleZone from "./components/BattleZone";
import ChoicesContainer from "./components/ChoicesContainer";
import GameHeader from "./components/GameHeader";
import GameRules from "./components/GameRules";
import ReplayButton from "./components/ReplayButton";
import './styles/RockPaperScissors.css'

function RockPaperScissors(){

  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [score, setScore] = useState<score>({ player: 0, computer: 0 });
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handleChoice = (choice: Choice) => {

    if (isAnimating) return;

    setGameStarted(true);
    setIsAnimating(true);
    setShowResult(false);
    setPlayerChoice(choice);

    setTimeout(() => {
      const compChoice = getRandomChoice(CHOICES);
      setComputerChoice(compChoice);

      setTimeout(() => {
        const winner = determineWinner(choice, compChoice);
        setResult(winner);
        setShowResult(true);

        if (winner === RESULT_TYPES.PLAYER) {
          setScore(prev => ({ ...prev, player: prev.player + 1 }));
        } else if (winner === RESULT_TYPES.COMPUTER) {
          setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
        }

        setIsAnimating(false);
      }, 500);
    }, 1500);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setShowResult(false);
  };

  return (

    <div className="rps-game">
      <div className="rps-game-content">
        <GameHeader score={score} />

        <BattleZone
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
          isAnimating={isAnimating}
          showResult={showResult}
          gameStarted={gameStarted}
        />

        <ChoicesContainer
          choices={CHOICES}
          onChoiceSelect={handleChoice}
          disabled={isAnimating}
        />

        <ReplayButton onClick={resetGame} show={showResult} />

        <GameRules />
      </div>
    </div>
  )
}

export default RockPaperScissors;