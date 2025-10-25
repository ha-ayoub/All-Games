import type { Choice } from "../utils/types"

interface ChoiceButtonprops{
    choice: Choice;
    onClick: (choice: Choice) => void;
    disabled: boolean;
}

export default function ChoiceButton({ choice, onClick, disabled }: ChoiceButtonprops) {
    return (
        <button
            onClick={() => onClick(choice)}
            disabled={disabled}
            className={`rps-choice-button ${choice.color}`}
            aria-label={`Choisir ${choice.name}`}
        >
            <div className="rps-button-overlay"></div>
            <div className="rps-button-emoji">{choice.emoji}</div>
            <div className="rps-button-name">{choice.name}</div>
        </button>
    )
}