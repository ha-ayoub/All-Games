import { Gamepad2 } from "lucide-react";
import { GAMES_CONFIG } from "../../config/games.config";

export default function AboutGames() {
    return (
        <section className="about-section">
            <h2>
                <span className="about-section-icon">
                    <Gamepad2 size={30} strokeWidth={2} />
                </span>
                Les Jeux
            </h2>
            <div className="games-list">
                {GAMES_CONFIG.map(({ id, title, image2, objective, instructions }) => (
                    <div key={id} className="game-info">
                        <img src={image2} alt={title} className="game-image" />
                        <div>
                            <h3>{title}</h3>
                            <p><strong>Objectif :</strong> {objective}</p>
                            <p><strong>Comment jouer :</strong> {instructions}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}