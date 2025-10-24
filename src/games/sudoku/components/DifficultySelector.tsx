import type { DifficultySelectorProps } from "../utils/props";

export default function DifficultySelector({ difficulty } : DifficultySelectorProps) {
    const getDifficultyColor = () => {
        switch (difficulty) {
            case 'Easy':
                return '#4caf50';
            case 'Medium':
                return '#ff9800';
            case 'Hard':
                return '#f44336';
            default:
                return '#9e9e9e';
        }
    };

    return (
        <div className="sudoku-difficulty-badge">
            <span 
                className="sudoku-difficulty-label"
                style={{ backgroundColor: getDifficultyColor() }}
            >
                {difficulty}
            </span>
        </div>
    );
}