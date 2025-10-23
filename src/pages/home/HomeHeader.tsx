import { Search } from "lucide-react";
import type { HomeHeaderProps } from "../../utils/types";

export default function HomeHeader({searchTerm, setSearchTerm}: HomeHeaderProps) {
    
    return (
        <header className="home-header">
            <div className="header-content">
                <h1 className="home-title">
                    Explorez Nos Jeux
                </h1>
                <p className="home-subtitle">
                    <i>Retrouvez la magie des jeux d’hier et d’aujourd’hui.</i>
                </p>
            </div>

            <div className="search-container">
                <div className="search-wrapper">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Rechercher un jeu..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </header>
    )
}