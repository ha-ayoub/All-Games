export const MESSAGES = {
  FILL_ALL_CELLS: 'Please fill all cells first.',
  CORRECT: 'Correct!',
  INCORRECT: 'Incorrect, try again.',
  FETCH_ERROR: 'Failed to fetch puzzle',
  INVALID_FORMAT: 'Invalid data format',
  HTTP_ERROR: 'HTTP error! status',
  UNKNOWN: 'Unknown',
} as const ;

export const DIFFICULTIES = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard'
} as const;

export const GRID_SIZE = 9;
export const BOX_SIZE = 3;
export const TOTAL_CELLS = 81;
export const ANIMATION_SPEED = 30;