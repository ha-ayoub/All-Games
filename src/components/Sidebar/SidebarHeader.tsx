import { Gamepad2, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

interface SidebarProps {
    onClose: () => void;
}

export default function SidebarHeader({ onClose }: SidebarProps) {
    return (
        <>
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <div className="logo-icon-wrapper">
                        <Gamepad2 size={32} strokeWidth={2} />
                    </div>
                    <div className="logo-text">
                        <h1>All Games</h1>
                        <span className="logo-subtitle">Gaming Hub</span>
                    </div>
                </div>

                <button
                    className="sidebar-close"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="sidebar-actions">
                <ThemeToggle />
            </div>
        </>

    )
}