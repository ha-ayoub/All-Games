import gameLogo from "../assets/Hangman-game.png";

export default function GameHeader() {
    return (
        <div className="hangman-header">
            <img src={gameLogo} alt=""/>
            <h1> Hangman</h1>
        </div>
    )
}