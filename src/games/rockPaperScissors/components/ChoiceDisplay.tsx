import type { Choice } from "../utils/types";

interface ChoiceDisplayProps{
    choice: Choice | null;
    label: string;
    isAnimating: boolean;
};

export default function ChoiceDisplay({ choice, label, isAnimating }: ChoiceDisplayProps) {
    if (!choice) return null;

    return (
        <div className="rps-choice-display">
            <p className="rps-choice-label">{label}</p>
            <div className={`rps-choice-circle ${choice.color} ${isAnimating ? 'animating' : 'pulse'}`}>
                <div className="rps-choice-emoji">{choice.emoji}</div>
            </div>
        </div>
    )
}