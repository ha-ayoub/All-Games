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
  id: string;
  title: string;
  description: string;
  path: string;
  image: string;
  image2: string;
  objective: string;
  instructions: string;
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

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HomeHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}