import { MESSAGES } from "./constants";
import type { FetchSudokuParams, SudokuAPIResponse } from "./types";


const SUDOKU_API = "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty}}}";

export const fetchSudoku = async ({
  setError,
  setStatus,
  setDifficulty,
  setPuzzle,
  setSolution,
  setBoard,
  setSelected,
}: FetchSudokuParams): Promise<void> => {
  setError("");
  setStatus("");

  try {
    const res = await fetch(SUDOKU_API);

    if (!res.ok) {
      throw new Error(`${MESSAGES.HTTP_ERROR}: ${res.status}`);
    }

    const data: SudokuAPIResponse = await res.json();

    if (!data.newboard?.grids?.[0]) {
      throw new Error(`${MESSAGES.INVALID_FORMAT}`);
    }

    const grid = data.newboard.grids[0];
    const difficulty = grid.difficulty || `${MESSAGES.UNKNOWN}`;
    const puzzle = grid.value.map((row) => row.map((cell) => (cell === 0 ? null : cell)));
    const solution = grid.solution.map((row) =>row.map((cell) => (cell === 0 ? null : cell)));
    console.log(solution);
    setDifficulty(difficulty);
    setPuzzle(puzzle);
    setSolution(solution);
    setBoard(puzzle.map((row) => [...row]));
    setSelected(null);
  } catch (e) {
    const err = e instanceof Error ? e.message : String(e);
    setError(`${MESSAGES.FETCH_ERROR}: ${err}`);
  }
};
