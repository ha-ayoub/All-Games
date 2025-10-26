import type { Translations } from '../i18n/translations';
import type { GameConfig } from './types';

export function getGameTranslation(game: GameConfig, t: Translations) {
  return {
    title: t.games[game.id].title,
    description: t.games[game.id].description,
    objective: t.games[game.id].objective,
    instructions: t.games[game.id].instructions,
    category: t.categories[game.gameCategory.id as keyof typeof t.categories]
  };
}