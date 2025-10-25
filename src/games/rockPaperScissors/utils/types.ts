import type { CARD } from "./constants";

export interface Choice {
  id: string;
  name: CARD;
  emoji: string;
  color: string;
}

export interface score{
    player: number;
    computer: number;
}