import { Grid3x3, PersonStanding, Brain, Hash, Home, Info, HelpCircle, Hand } from 'lucide-react';
import type { GameCategory, GameConfig, NavItem } from '../utils/types';

export const GAMES_CATEG: GameCategory[] =[
  {
    id:'strategy',
    color: '#3b82f6',
    category: 'Stratégie'
  },
  {
    id:'reflection',
    color: '#10b981',
    category: 'Réflexion'
  },
  {
    id:'memory',
    color: '#f59e0b',
    category: 'Mémoire',
  },
  {
    id:'Logic',
    color: '#8b5cf6',
    category: 'Logique',
  }
];

export const GAMES_CONFIG: GameConfig[] = [
  {
    id: 'tictactoe',
    path: '/tictactoe',
    image: '/tictactoe-logo.png',
    image2: "/TicTacToe-icon.png",
    icon: Grid3x3,
    gameCategory: GAMES_CATEG.find(c => c.id === 'strategy')!
  },
  {
    id: 'hangman',
    path: '/hangman',
    image: '/Hangman-logo.png',
    image2: "/Hangman-icon.png",
    icon: PersonStanding,
    gameCategory: GAMES_CATEG.find(c => c.id === 'reflection')!
  },
  {
    id: 'memory',
    path: '/memory',
    image: '/memory-logo.png',
    image2: "/Memory-Card-Game-icon.png",
    icon: Brain,
    gameCategory: GAMES_CATEG.find(c => c.id === 'memory')!
  },
  {
    id: 'sudoku',
    path: '/sudoku',
    image: '/sudoku-logo.png',
    image2: "/sudoku-logo.png",
    icon: Hash,
    gameCategory: GAMES_CATEG.find(c => c.id === 'Logic')!
  },
  {
    id: 'rockPaperScissors',
    path: '/rockPaperScissors',
    image: '/rock-paper-scissors.png',
    image2: "/rock-paper-scissors.png",
    icon: Hand,
    gameCategory: GAMES_CATEG.find(c => c.id === 'strategy')!
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
    label: game.id,
    icon: game.icon,
    color: game.gameCategory.color
  })),
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { path: '/about', label: 'À propos', icon: Info },
  { path: '/help', label: 'Aide', icon: HelpCircle },
];