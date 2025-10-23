export interface GameInfo {
    id: string;
    title: string;
    image: string;
    objective: string;
    instructions: string;
}

export const GAMES_INFO: GameInfo[] = [
    {
        id: "tictactoe",
        title: "Tic Tac Toe",
        image: "/TicTacToe-icon.png",
        objective: "Alignez 3 symboles (X ou O) horizontalement, verticalement ou en diagonale.",
        instructions: "Cliquez sur une case vide pour placer votre symbole. Jouez à tour de rôle avec votre adversaire."
    },
    {
        id: "hangman",
        title: "Hangman",
        image: "/Hangman-icon.png",
        objective: "Devinez le mot mystère lettre par lettre avant que le pendu ne soit complet.",
        instructions: "Cliquez sur les lettres pour deviner. Attention aux erreurs !"
    },
    {
        id: "memory",
        title: "Memory Card",
        image: "/Memory-Card-Game-icon.png",
        objective: "Retrouvez toutes les paires de cartes identiques.",
        instructions: "Cliquez sur deux cartes pour les retourner. Si elles correspondent, elles restent visibles."
    },
    {
        id: "sudoku",
        title: "Sudoku",
        image: "/sudoku-logo.png",
        objective: "Remplissez la grille avec les chiffres de 1 à 9 sans répétition.",
        instructions: "Cliquez sur une case et sélectionnez un chiffre. Chaque ligne, colonne et région doit contenir les chiffres 1-9."
    },
    {
        id: "rockPaperScissors",
        title: "Rock Paper Scissors",
        image: "/rock-paper-scissors.png",
        objective: "Battez l'ordinateur en choisissant la meilleure option : Pierre, Feuille ou Ciseaux.",
        instructions: "Cliquez sur Pierre, Feuille ou Ciseaux pour jouer contre l'ordinateur. La victoire est déterminée par les règles classiques : Pierre bat Ciseaux, Ciseaux bat Feuille, Feuille bat Pierre."
    }
];