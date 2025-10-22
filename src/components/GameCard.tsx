import { Link } from 'react-router-dom';
import '../styles/GameCard.css';

interface Game {
  id: string;
  title: string;
  icon: string;
  description: string;
  path: string;
}

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Link to={game.path} className="game-card">
      <div className="game-card-icon">{game.icon}</div>
      <h3 className="game-card-title">{game.title}</h3>
      <p className="game-card-description">{game.description}</p>
      <div className="game-card-footer">
        <span className="play-button">Jouer →</span>
      </div>
    </Link>
  );
}

export default GameCard;