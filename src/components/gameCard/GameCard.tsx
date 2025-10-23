import { Link } from 'react-router-dom';
import '../../styles/GameCard.css';
import type { GameCardProps } from '../../utils/types';
import GameCardImg from './GameCardImg';
import GameCardContent from './GameCardContent';


function GameCard({ game }: GameCardProps) {

  return (
    <Link
      to={game.path}
      className="game-card"
      style={{ '--game-color': game.gameCategory.color } as React.CSSProperties}
    >
      <GameCardImg game={game} />
      <GameCardContent game={game} />
    </Link>
  );
}

export default GameCard;