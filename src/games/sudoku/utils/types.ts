export type CellValue = number | null;
export type SelectedCell = [number, number] | null;
export type SetterState<T> = React.Dispatch<React.SetStateAction<T>>;
type Setter<T> = (value: T) => void;


export interface SudokuGrid {
  value: number[][];
  solution: number[][];
  difficulty?: string;
}

export interface SudokuAPIResponse {
  newboard?: {
    grids?: SudokuGrid[];
  };
}

export interface FetchSudokuParams {
  setError: Setter<string>;
  setStatus: Setter<string>;
  setDifficulty: Setter<string>;
  setPuzzle: Setter<(number | null)[][]>;
  setSolution: Setter<(number | null)[][]>;
  setBoard: Setter<(number | null)[][]>;
  setSelected: Setter<[number, number] | null>;
}