import type { Theme } from "./types";

export const THEMES: Record<Theme, string[]> = {
  pays: ['FRANCE', 'ESPAGNE', 'ITALIE', 'PORTUGAL', 'ALLEMAGNE', 'BELGIQUE', 'SUISSE', 'CANADA', 'JAPON', 'BRESIL', 'MEXIQUE', 'MAROC'],
  villes: ['PARIS', 'LYON', 'MARSEILLE', 'BORDEAUX', 'TOULOUSE', 'RENNES', 'NANTES', 'LILLE', 'NICE', 'STRASBOURG', 'MONTPELLIER'],
  fruits: ['POMME', 'BANANE', 'ORANGE', 'FRAISE', 'CERISE', 'ANANAS', 'MANGUE', 'KIWI', 'PECHE', 'RAISIN', 'MELON', 'PASTEQUE', 'TOMATE', 'CAROTTE']
};

export const MAX_ERRORS = 6;
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');