import GameCard from "../../components/gameCard/GameCard";
import { GAMES_CONFIG } from "../../config/games.config";

interface HomeGamesSectionProps {
  searchTerm: string;
}

export default function HomeGamesSection({searchTerm} : HomeGamesSectionProps) {

    const filteredGames = GAMES_CONFIG.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.gameCategory.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="games-section">
            <div className="section-header">
                <h2>Tous les jeux ({filteredGames.length})</h2>
            </div>

            <div className="games-grid">
                {filteredGames.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>

            {filteredGames.length === 0 && (
                <div className="no-results">
                    <p>Aucun jeu trouvé pour "{searchTerm}"</p>
                </div>
            )}
        </div>
    )
}