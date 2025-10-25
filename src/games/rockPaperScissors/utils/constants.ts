import type { Choice } from "./types";

export const CARD = {
  ROCK: 'Rock',
  PAPER: 'Paper',
  SCISSORS: 'Scissors',
} as const;

export type CARD = typeof CARD[keyof typeof CARD];

export const CHOICES: Choice[] = [
  { id: CARD.ROCK.toLowerCase(), name: CARD.ROCK, emoji: '✊', color: 'blue' },
  { id: CARD.PAPER.toLowerCase(), name: CARD.PAPER, emoji: '✋', color: 'purple' },
  { id: CARD.SCISSORS.toLowerCase(), name: CARD.SCISSORS, emoji: '✌️', color: 'green' },
];

export const RESULT_TYPES = {
  PLAYER: 'player',
  COMPUTER: 'computer',
  DRAW: 'draw'
} as const;

export type ResultType = typeof RESULT_TYPES[keyof typeof RESULT_TYPES];

export const WIN_CONDITIONS: Record<string, string> = {
  [CARD.ROCK.toLowerCase()]: CARD.SCISSORS.toLowerCase(),
  [CARD.PAPER.toLowerCase()]: CARD.ROCK.toLowerCase(),
  [CARD.SCISSORS.toLowerCase()]: CARD.PAPER.toLowerCase(),
};
