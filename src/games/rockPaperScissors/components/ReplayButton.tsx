interface ReplayButtonProps{
    onClick: ()=> void;
    show: boolean;
}

export default function ReplayButton({ onClick, show }: ReplayButtonProps) {

    if (!show) return null;
    return (
        <div className="rps-replay-container">
            <button onClick={onClick} className="rps-replay-button">
                Replay
            </button>
        </div>
    )
}