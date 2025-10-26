import GameCard from "../../components/gameCard/GameCard.tsx";
import { GAMES_CONFIG } from "../../config/games.config";
import { useTranslation } from "../../hooks/useTranslation.ts";
import { getGameTranslation } from "../../utils/gameHelpers.ts";

interface HomeGamesSectionProps {
  searchTerm: string;
}

export default function HomeGamesSection({searchTerm} : HomeGamesSectionProps) {
    const { t } = useTranslation();
    
    const filteredGames = GAMES_CONFIG.filter(game => {
        const gameTranslation = getGameTranslation(game, t);
        return gameTranslation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               gameTranslation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
               gameTranslation.category?.toLowerCase().includes(searchTerm.toLowerCase() ?? false);
    });
    
    return (
        <div className="games-section">
            <div className="section-header">
                <h2>{t.home.allGames} ({filteredGames.length})</h2>
            </div>

            <div className="games-grid">
                {filteredGames.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>

            {filteredGames.length === 0 && (
                <div className="no-results">
                    <p>{t.home.noResults} "{searchTerm}"</p>
                </div>
            )}
        </div>
    )
}