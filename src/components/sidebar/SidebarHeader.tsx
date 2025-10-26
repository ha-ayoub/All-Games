import { Gamepad , X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "../../hooks/useTranslation";

interface SidebarProps {
    onClose: () => void;
}

export default function SidebarHeader({ onClose }: SidebarProps) {
    const { t } = useTranslation();

    return (
        <>
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <div className="logo-icon-wrapper">
                        <Gamepad size={32} strokeWidth={2} />
                    </div>
                    <div className="logo-text">
                        <h1>{t.sidebar.title}</h1>
                        <span className="logo-subtitle">{t.sidebar.subtitle}</span>
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
                <LanguageSelector />
                <ThemeToggle />
            </div>
        </>

    )
}