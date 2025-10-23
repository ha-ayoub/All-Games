import { Grid3x3, PersonStanding, Brain, Hash, Home, Info, HelpCircle, Hand } from 'lucide-react';
import type { FAQItem, GameCategory, GameConfig, NavItem } from '../utils/types';

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
    title: 'Tic Tac Toe',
    description: 'Jeu de stratégie classique pour deux joueurs. Alignez trois symboles pour remporter la victoire.',
    path: '/tictactoe',
    image: '/tictactoe-logo.png',
    image2: "/TicTacToe-icon.png",
    objective: "Alignez 3 symboles (X ou O) horizontalement, verticalement ou en diagonale.",
    instructions: "Cliquez sur une case vide pour placer votre symbole. Jouez à tour de rôle avec votre adversaire.",
    icon: Grid3x3,
    gameCategory: GAMES_CATEG.find(c => c.id === 'strategy')!
  },
  {
    id: 'hangman',
    title: 'Hangman',
    description: 'Devinez le mot mystère lettre par lettre avant que le temps ne soit écoulé.',
    path: '/hangman',
    image: '/Hangman-logo.png',
    image2: "/Hangman-icon.png",
    objective: "Devinez le mot mystère lettre par lettre avant que le pendu ne soit complet.",
    instructions: "Cliquez sur les lettres pour deviner. Attention aux erreurs !",
    icon: PersonStanding,
    gameCategory: GAMES_CATEG.find(c => c.id === 'reflection')!
  },
  {
    id: 'memory',
    title: 'Memory Card',
    description: 'Testez et améliorez votre mémoire en retrouvant les paires de cartes identiques.',
    path: '/memory',
    image: '/memory-logo.png',
    image2: "/Memory-Card-Game-icon.png",
    objective: "Retrouvez toutes les paires de cartes identiques.",
    instructions: "Cliquez sur deux cartes pour les retourner. Si elles correspondent, elles restent visibles.",
    icon: Brain,
    gameCategory: GAMES_CATEG.find(c => c.id === 'memory')!
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    description: 'Résolvez cette grille de logique en remplissant les cases avec les bons chiffres.',
    path: '/sudoku',
    image: '/sudoku-logo.png',
    image2: "/sudoku-logo.png",
    objective: "Remplissez la grille avec les chiffres de 1 à 9 sans répétition.",
    instructions: "Cliquez sur une case et sélectionnez un chiffre. Chaque ligne, colonne et région doit contenir les chiffres 1-9.",
    icon: Hash,
    gameCategory: GAMES_CATEG.find(c => c.id === 'Logic')!
  },
  {
    id: 'rockPaperScissors',
    title: 'Rock Paper Scissors',
    description: `Battez l'ordinateur en choisissant la meilleure option : Pierre, Feuille ou Ciseaux.`,
    path: '/rockPaperScissors',
    image: '/rock-paper-scissors.png',
    image2: "/rock-paper-scissors.png",
    objective: "Battez l'ordinateur en choisissant la meilleure option : Pierre, Feuille ou Ciseaux.",
    instructions: "Cliquez sur Pierre, Feuille ou Ciseaux pour jouer contre l'ordinateur. La victoire est déterminée par les règles classiques : Pierre bat Ciseaux, Ciseaux bat Feuille, Feuille bat Pierre.",
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
    label: game.title,
    icon: game.icon,
    color: game.gameCategory.color
  })),
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { path: '/about', label: 'À propos', icon: Info },
  { path: '/help', label: 'Aide', icon: HelpCircle },
];