import { Search } from 'lucide-react';
import { useState } from 'react';
import GameCard from '../components/gameCard/GameCard';
import { GAMES_CONFIG } from '../config/games.config';
import '../styles/Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredGames = GAMES_CONFIG.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1 className="home-title">
            Explorez Nos Jeux
          </h1>
          <p className="home-subtitle">
            Une sélection de jeux classiques revisités avec un design moderne
          </p>
        </div>
        
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Rechercher un jeu..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

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
    </div>
  );
}

export default Home;