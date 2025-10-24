import gameLogo from "../assets/sudoku-icon.png";

export default function Header() {
    return (
        <header>
            <img src={gameLogo} alt="Sudoku Game" />
        </header>
    )
}