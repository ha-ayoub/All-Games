import { Grid3x3, Target, Brain, Hash, Home, Info} from 'lucide-react';
import type { GameConfig, NavItem } from '../utils/types';


export const GAMES_CONFIG: GameConfig[] = [
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe',
    description: 'Jeu de stratégie classique pour deux joueurs. Alignez trois symboles pour remporter la victoire.',
    path: '/tictactoe',
    image: '/tictactoe-logo.png',
    icon: Grid3x3,
    color: '#3b82f6',
    category: 'Stratégie'
  },
  {
    id: 'hangman',
    title: 'Hangman',
    description: 'Devinez le mot mystère lettre par lettre avant que le temps ne soit écoulé.',
    path: '/hangman',
    image: '/Hangman-logo.png',
    icon: Target,
    color: '#10b981',
    category: 'Réflexion'
  },
  {
    id: 'memory',
    title: 'Memory Card',
    description: 'Testez et améliorez votre mémoire en retrouvant les paires de cartes identiques.',
    path: '/memory',
    image: '/memory-logo.png',
    icon: Brain,
    color: '#f59e0b',
    category: 'Mémoire'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    description: 'Résolvez cette grille de logique en remplissant les cases avec les bons chiffres.',
    path: '/sudoku',
    image: '/sudoku-logo.png',
    icon: Hash,
    color: '#8b5cf6',
    category: 'Logique'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { 
    path: '/', 
    label: 'Accueil', 
    icon: Home 
  },
  ...GAMES_CONFIG.map(game => ({
    path: game.path,
    label: game.title,
    icon: game.icon,
    color: game.color
  })),
  { 
    path: '/about', 
    label: 'À propos', 
    icon: Info 
  },
];

// export const addNewGame = (game: GameConfig) => {
//   GAMES_CONFIG.push(game);
// };