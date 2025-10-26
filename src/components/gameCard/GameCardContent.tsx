import { useTranslation } from "../../hooks/useTranslation";
import { getGameTranslation } from "../../utils/gameHelpers";
import type { GameCardProps } from "../../utils/types";
import { ArrowRight } from 'lucide-react';

export default function GameCardContent({game}: GameCardProps) {

    const { t } = useTranslation();
    const gameTranslation = getGameTranslation(game, t);

    return (
        <div className="game-card-content">
            {game.gameCategory.category && (
                <span className="game-card-category">{gameTranslation.category}</span>
            )}

            <h3 className="game-card-title">{gameTranslation.title}</h3>
            <p className="game-card-description">{gameTranslation.description}</p>

            <div className="game-card-footer">
                <span className="play-button">
                    Jouer maintenant
                    <ArrowRight size={18} />
                </span>
            </div>
        </div>
    )
}