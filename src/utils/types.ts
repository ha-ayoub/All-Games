import type { LucideIcon} from 'lucide-react';
import type { ReactNode } from 'react';

//GameCard
export interface GameCardProps {
  game: GameConfig;
}

//GameConfig
export interface GameConfig {
  id: string;
  title: string;
  description: string;
  path: string;
  image: string;
  icon: LucideIcon;
  color: string;
  category?: string;
}
export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
  color?: string;
}

//Layout
export interface LayoutProps {
  children: ReactNode;
}

//Help
export interface FAQItem {
  question: string;
  answer: string;
}

//Home
export interface HomeHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}