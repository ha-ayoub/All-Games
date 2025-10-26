import type { LucideIcon} from 'lucide-react';
import type { ReactNode } from 'react';

export interface GameCardProps {
  game: GameConfig;
}

export interface GameCategory {
  id: string;
  color: string;
  category: string;
}
export interface GameConfig {
  id: 'tictactoe' | 'hangman' | 'memory' | 'sudoku' | 'rockPaperScissors';
  path: string;
  image: string;
  image2: string;
  icon: LucideIcon;
  gameCategory: GameCategory;
}
export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
  color?: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface HomeHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}