import type { GameCardProps } from "../../utils/types";
import { ArrowRight } from 'lucide-react';

export default function GameCardContent({game}: GameCardProps) {
    return (
        <div className="game-card-content">
            {game.category && (
                <span className="game-card-category">{game.category}</span>
            )}

            <h3 className="game-card-title">{game.title}</h3>
            <p className="game-card-description">{game.description}</p>

            <div className="game-card-footer">
                <span className="play-button">
                    Jouer maintenant
                    <ArrowRight size={18} />
                </span>
            </div>
        </div>
    )
}