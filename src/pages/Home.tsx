import GameCard from '../components/GameCard';
import '../styles/Home.css';

function Home() {
  const games = [
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      icon: '❌',
      description: 'Le classique jeu de morpion pour deux joueurs',
      path: '/tictactoe'
    },
    {
      id: 'hangman',
      title: 'Hangman',
      icon: '🎯',
      description: 'Devinez le mot avant que le pendu soit complet',
      path: '/hangman'
    },
    {
      id: 'memory',
      title: 'Memory Card',
      icon: '🃏',
      description: 'Testez votre mémoire en retrouvant les paires',
      path: '/memory'
    },
    {
      id: 'sudoku',
      title: 'Sudoku',
      icon: '🔢',
      description: 'Résolvez cette grille de logique et de chiffres',
      path: '/sudoku'
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">
          Bienvenue sur All Games
        </h1>
        <p className="home-subtitle">
          Une collection de mini-jeux classiques pour vous divertir
        </p>
      </header>

      <div className="games-grid">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;