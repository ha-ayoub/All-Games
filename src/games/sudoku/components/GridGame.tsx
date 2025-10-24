import classNames from "classnames";
import { BOX_SIZE, GRID_SIZE } from "../utils/constants";
import type { GridGameProps } from "../utils/props";

export default function GridGame({ board, puzzle, selected, setSelected, handleInput, greenCount }: GridGameProps) {

    return (
        <div className="sudoku-container">
            <table className="sudoku-table">
                <tbody>
                    {board.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    const isPrefilled = puzzle[rowIndex][cellIndex] !== null;
                                    const cIdx = rowIndex * GRID_SIZE + cellIndex;
                                    return (
                                        <td key={cellIndex}
                                            className={classNames('sudoku-column', {
                                                'same-row': selected && rowIndex === selected[0],
                                                'same-col': selected && cellIndex === selected[1],
                                                'same-box': selected &&
                                                    Math.floor(rowIndex / BOX_SIZE) === Math.floor(selected[0] / BOX_SIZE) &&
                                                    Math.floor(cellIndex / BOX_SIZE) === Math.floor(selected[1] / BOX_SIZE),
                                                'green': cIdx < greenCount,
                                            })}
                                        >
                                            <input
                                                type="text"
                                                maxLength={1}
                                                value={cell === null ? '' : cell}
                                                readOnly={isPrefilled}
                                                onFocus={() => { setSelected([rowIndex, cellIndex]); }}
                                                onClick={() => { setSelected([rowIndex, cellIndex]); }}
                                                onChange={(e) => { handleInput(rowIndex, cellIndex, e.target.value)}}
                                            />
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}