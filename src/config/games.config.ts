import { Grid3x3, Target, Brain, Hash, Home, Info, HelpCircle} from 'lucide-react';
import type { FAQItem, GameConfig, NavItem } from '../utils/types';

export const FAQ_ITEMS: FAQItem[] = [
    {
      question: "Comment jouer aux jeux ?",
      answer: "Cliquez sur n'importe quelle carte de jeu depuis la page d'accueil ou utilisez le menu de navigation à gauche. Chaque jeu a ses propres règles.",
    },
    {
      question: "Comment changer le thème (mode clair/sombre) ?",
      answer: "Utilisez le toggle situé dans la barre latérale en haut.",
    },
    {
      question: "Les jeux fonctionnent-ils sur mobile ?",
      answer: "Oui ! Tous nos jeux sont optimisés pour mobile, tablette et desktop. L'interface s'adapte automatiquement à la taille de votre écran.",
    },
    {
      question: "Puis-je jouer hors ligne ?",
      answer: "Une fois les jeux chargés, vous pouvez continuer à jouer même en cas de perte de connexion internet.",
    }
  ];

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
  },
    {
    id: 'rockPaperScissors',
    title: 'Rock Paper Scissors',
    description: `Battez l'ordinateur en choisissant la meilleure option : Pierre, Feuille ou Ciseaux.` ,
    path: '/rockPaperScissors',
    image: '/rock-paper-scissors.png',
    icon: Hash,
    color: '#3b82f6',
    category: 'Stratégie'
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
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { path: '/about', label: 'À propos', icon: Info },
  { path: '/help', label: 'Aide', icon: HelpCircle },
];