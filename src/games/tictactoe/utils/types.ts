export interface Turn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

export interface BoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  gameBoard: (string | null)[][];
}

export interface GameOverProps {
  winner: string | undefined;
  onRematch: () => void;
}

export interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, newName: string) => void;
}
