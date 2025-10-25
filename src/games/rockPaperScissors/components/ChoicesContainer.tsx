import type { Choice } from "../utils/types";
import ChoiceButton from "./ChoiceButton";

interface ChoicesContainerProps {
  choices: Choice[];
  onChoiceSelect: (choice: Choice) => void;
  disabled: boolean;
}

export default function ChoicesContainer({ choices, onChoiceSelect, disabled }: ChoicesContainerProps) {
    return (
        <div className="rps-choices-container">
            {choices.map((choice) => (
                <ChoiceButton
                    key={choice.id}
                    choice={choice}
                    onClick={onChoiceSelect}
                    disabled={disabled}
                />
            ))}
        </div>
    )
}