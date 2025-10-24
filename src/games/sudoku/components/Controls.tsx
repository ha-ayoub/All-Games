import type { ControlsProps } from "../utils/props";

export default function Controls({handleCheck, handleReset, handleNewPuzzle}: ControlsProps) {
  return (
    <div className="sudoku-container_controls">
      <button onClick={()=>handleCheck()}> Check </button>
      <button onClick={()=>handleReset()}> Reset </button>
      <button onClick={()=>handleNewPuzzle()}> New Puzzle </button>
    </div>
  )
}