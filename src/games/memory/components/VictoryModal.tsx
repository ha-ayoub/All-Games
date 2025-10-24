import { formatTime } from "../utils/helpers";
import Modal from "./Modal";

interface VictoryModalProps {
    isOpen: boolean;
    time: number;
    moves: number;
    onClose: () => void;
    onReplay: () => void;
}

export default function VictoryModal({ isOpen, time, moves, onClose, onReplay }: VictoryModalProps) {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className="memory-modal-success">
                <div className="memory-success-icon">🎉</div>
                <h2>Game over!</h2>
                <p className="memory-modal-subtitle">Excellent work</p>
                <div className="memory-modal-stats">
                    <div className="memory-modal-stat">
                        <div className="memory-modal-stat-icon">⏱️</div>
                        <div className="memory-modal-stat-value">{formatTime(time)}</div>
                        <div className="memory-modal-stat-label">Time</div>
                    </div>
                    <div className="memory-modal-stat">
                        <div className="memory-modal-stat-icon">🎯</div>
                        <div className="memory-modal-stat-value">{moves}</div>
                        <div className="memory-modal-stat-label">Blows</div>
                    </div>
                </div>
                <button onClick={onReplay} className="memory-modal-btn">
                    Replay
                </button>
            </div>
        </Modal>
    )
}