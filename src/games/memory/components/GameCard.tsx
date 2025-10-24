import type { Card } from "../utils/types";

interface GameCardProps{
  card: Card; 
  flipped: boolean; 
  onClick: () => void;
}
export default function GameCard({ card, flipped, onClick }: GameCardProps) {

   return (
    <div className={`memory-game-card ${flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`} onClick={onClick}>
      <div className="memory-game-card-inner">
        <div className="memory-game-card-front">
          <div className="memory-card-logo">?</div>
          <div className="memory-card-pattern"></div>
        </div>
        <div className="memory-game-card-back">
          <img 
            src={card.img} alt="card" 
            onError={(e) => {
              console.error('Image failed to load:', card.img,'.  ',`${e}`);
            }} 
          />
        </div>
      </div>
    </div>
  );
}