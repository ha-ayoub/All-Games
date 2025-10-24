import gameLogo from "../assets/game-logo.png";

export default function Header() {
    return (
        <header>
            <img src={gameLogo} alt="Tic-Tac-Toe Game" />
            <h1>Tic-Tac-Toe</h1>
        </header>
    )
}