import type { CellValue, SelectedCell, SetterState } from "./types";

export interface ControlsProps {
    handleCheck:() => void;
    handleReset:() => void;
    handleNewPuzzle:() => void;
}

export interface DifficultySelectorProps {
    difficulty: string;
}

export interface StatusProps {
    status: string;
}

export interface GridGameProps {
  board: CellValue[][];
  puzzle: CellValue[][];
  selected: [number, number] | null;
  setSelected: SetterState<SelectedCell>;
  handleInput: (rowIndex: number, cellIndex: number, value: string) => void;
  greenCount: number;
}