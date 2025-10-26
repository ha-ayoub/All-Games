import { Search } from "lucide-react";
import type { HomeHeaderProps } from "../../utils/types";
import { useTranslation } from "../../hooks/useTranslation";

export default function HomeHeader({searchTerm, setSearchTerm}: HomeHeaderProps) {
    const { t } = useTranslation();

    return (
        <header className="home-header">
            <div className="header-content">
                <h1 className="home-title">
                    {t.home.title}
                </h1>
                <p className="home-subtitle">
                    <i>{t.home.subtitle}</i>
                </p>
            </div>

            <div className="search-container">
                <div className="search-wrapper">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder={t.home.searchPlaceholder}
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </header>
    )
}