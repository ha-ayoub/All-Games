import type { GameCardProps } from "../../utils/types";

export default function GameCardImg({game} : GameCardProps) {

    return (
        <div className="game-card-image-container">
            <img
                src={game.image}
                className="game-card-image"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />
        </div>
    )
}