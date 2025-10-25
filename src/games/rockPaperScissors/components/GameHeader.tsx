import { CARD } from "../utils/constants";
import type { score } from "../utils/types";
import ScoredCard from "./ScoredCard";

interface GameHeaderProps{
    score: score;
}

export default function GameHeader({ score }: GameHeaderProps) {
    return (
        <header className="rps-game-header">
            <h1 className="rps-game-title">
                {`${CARD.ROCK}`} <span className="rps-title-highlight">{`${CARD.PAPER}`}</span> {`${CARD.SCISSORS}`}
            </h1>
            <div className="rps-score-board">
                <ScoredCard label="Player" score={score.player} type="player" />
                <ScoredCard label="Computer" score={score.computer} type="computer" />
            </div>
        </header>
    )
}