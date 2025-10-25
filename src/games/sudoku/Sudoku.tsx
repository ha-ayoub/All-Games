import { useEffect, useState } from "react";
import { GRID_SIZE, MESSAGES, TOTAL_CELLS } from "./utils/constants";
import { fetchSudoku } from "./utils/fetch-sudoku";
import Controls from "./components/Controls";
import DifficultySelector from "./components/DifficultySelector";
import GridGame from "./components/GridGame";
import Status from "./components/Status";
import Header from "./components/Header";
import "./styles/Sudoku.css";


function Sudoku() {
    const [board, setBoard] = useState(
        Array(GRID_SIZE)
            .fill(null)
            .map(() => Array(GRID_SIZE).fill(null)));

    const [puzzle, setPuzzle] = useState(
        Array(GRID_SIZE)
            .fill(null)
            .map(() => Array(GRID_SIZE).fill(null)));

    const [solution, setSolution] = useState(
        Array(GRID_SIZE)
            .fill(null)
            .map(() => Array(GRID_SIZE).fill(null)));


    const [status, setStatus] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [greenCount, setGreenCount] = useState<number>(0);
    const [selected, setSelected] = useState<[number, number] | null>(null);
    const [animationInterval, setAnimationInterval] = useState<number | null>(null);
    const [difficulty, setDifficulty] = useState<string>(`${MESSAGES.UNKNOWN}`);

    useEffect(() => {
        fetchSudoku({
            setError,
            setStatus,
            setDifficulty,
            setPuzzle,
            setSolution,
            setBoard,
            setSelected,
        });
    }, [])


    function handleInput(rowIndex: number, cellIndex: number, value: string) {
        if (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 9)) {
            setBoard((prev) => prev.map(
                (row, r) =>
                    row.map((cell, c) => {
                        if (r === rowIndex && c === cellIndex) {
                            return value ? parseInt(value) : null;
                        }
                        return cell;
                    })
            ))
        }
    }

    function handleCheck() {
        if (animationInterval) clearInterval(animationInterval);

        const flatBoard = board.flat();

        if (flatBoard.some(cell => cell === null)) {
            setStatus(`${MESSAGES.FILL_ALL_CELLS}`);
            return;
        }

        const flatSolution = solution.flat();

        if (flatBoard.every((cell, i) => cell === flatSolution[i])) {
            setStatus(`${MESSAGES.CORRECT}`);

            let count = 0;
            const totalCells = TOTAL_CELLS;

            const interval = setInterval(() => {
                count++;
                setGreenCount(count);
                if (count === totalCells) {
                    clearInterval(interval);
                    setAnimationInterval(null);
                }
            }, 30);
            setAnimationInterval(interval as unknown as number);
        } else {
            setStatus(`${MESSAGES.INCORRECT}`);
            setGreenCount(0);
        }
    }

    function handleReset() {
        setBoard(puzzle.map((row) => [...row]));
        setStatus('');
        setSelected(null);
        setGreenCount(0);
    }

    function handleNewPuzzle() {
        setGreenCount(0);
        fetchSudoku({
            setError,
            setStatus,
            setDifficulty,
            setPuzzle,
            setSolution,
            setBoard,
            setSelected,
        });
    }

    if (error) {
        return <div className="error">{error}</div>
    }

    return (
        <div className="sudoku-game">
            <main>
                <div className="sudoku-containerApp">
                    <Header />
                    <Status status={status} />
                    <DifficultySelector difficulty={difficulty} />
                    <GridGame
                        board={board}
                        puzzle={puzzle}
                        selected={selected}
                        setSelected={setSelected}
                        handleInput={handleInput}
                        greenCount={greenCount}
                    />
                    <Controls
                        handleCheck={handleCheck}
                        handleReset={handleReset}
                        handleNewPuzzle={handleNewPuzzle}
                    />
                </div>
            </main>
        </div>
    )
};

export default Sudoku;