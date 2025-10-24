export type Theme = 'pays' | 'villes' | 'fruits';

export interface GameState {
  word: string;
  guessedLetters: string[];
  errors: number;
  gameOver: boolean;
  won: boolean;
}