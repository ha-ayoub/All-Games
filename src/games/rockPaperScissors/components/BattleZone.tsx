import type { ResultType } from "../utils/constants";
import type { Choice } from "../utils/types";
import ChoiceDisplay from "./ChoiceDisplay";
import ResultDisplay from "./ResultDisplay";

interface BattleZoneProps{
    playerChoice: Choice | null;
    computerChoice: Choice | null;
    result: ResultType | null;
    isAnimating: boolean;
    showResult: boolean;
    gameStarted: boolean;
}

export default function BattleZone({ playerChoice, computerChoice, result, isAnimating, showResult, gameStarted }: BattleZoneProps) {

    if (!gameStarted) {
        return (
            <div className="rps-start-message">
                <p>Choose your weapon to begin</p>
            </div>
        );
    }
    return (
        <div className="rps-battle-zone">
            <ChoiceDisplay choice={playerChoice} label="YOUR CHOICE" isAnimating={isAnimating} />
            {showResult && <ResultDisplay result={result} />}
            <ChoiceDisplay choice={computerChoice} label="COMPUTER" isAnimating={isAnimating} />
        </div>
    )
}