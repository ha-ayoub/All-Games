import type { ResultType } from "../utils/constants";

interface ResultDisplayProps{
    result: ResultType | null;
}

export default function ResultDisplay({ result }: ResultDisplayProps) {
    const resultConfig = {
        player: { text: 'VICTORY!', className: 'win' },
        computer: { text: 'DEFEAT!', className: 'lose' },
        draw: { text: 'EQUALITY!', className: 'draw' }
    };

    if (!result) return null;

    const config = resultConfig[result];
    
    return (
        <div className="rps-result-display">
            <div className={`rps-result-text ${config.className}`}>
                {config.text}
            </div>
        </div>
    )
}