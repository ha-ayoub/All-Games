import { Gamepad2 } from "lucide-react";
import { GAMES_CONFIG } from "../../config/games.config";
import { useTranslation } from "../../hooks/useTranslation";
import { getGameTranslation } from "../../utils/gameHelpers";

export default function AboutGames() {
    const { t } = useTranslation();

    return (
        <section className="about-section">
            <h2>
                <span className="about-section-icon">
                    <Gamepad2 size={30} strokeWidth={2} />
                </span>
                {t.about.gamesTitle}
            </h2>
            <div className="games-list">
                {GAMES_CONFIG.map((game) => {
                    const gameTranslation = getGameTranslation(game, t);
                    return (<div key={game.id} className="game-info">
                        <img src={game.image2} alt={gameTranslation.title} className="game-image" />
                        <div>
                            <h3>{gameTranslation.title}</h3>
                            <p><strong>{t.about.gameObjective} :</strong> {gameTranslation.objective}</p>
                            <p><strong>{t.about.gameExplain} :</strong> {gameTranslation.instructions}</p>
                        </div>
                    </div>
                    );

                })}
            </div>
        </section>
    )
}