import { HelpCircle } from "lucide-react";

export default function HelpHeader() {
    return (
        <>
            <header className="help-header">
                <div className="help-icon">
                    <HelpCircle size={48} strokeWidth={1.5} />
                </div>
                <h1>Centre d'Aide</h1>
                <p className="help-subtitle">
                    Trouvez des réponses à vos questions, apprenez à utiliser <strong>Arcadia</strong> et surtout… amusez-vous !
                </p>
            </header>

            <section className="help-section">
                <h2> Démarrage Rapide</h2>
                <div className="quick-start-grid">
                    <div className="quick-start-card">
                        <div className="step-number">1</div>
                        <h3>Choisissez un jeu</h3>
                        <p>Parcourez la collection de jeux sur la page d'accueil</p>
                    </div>

                    <div className="quick-start-card">
                        <div className="step-number">2</div>
                        <h3>Cliquez pour jouer</h3>
                        <p>Cliquez sur la carte du jeu ou utilisez le menu de navigation</p>
                    </div>

                    <div className="quick-start-card">
                        <div className="step-number">3</div>
                        <h3>Amusez-vous !</h3>
                        <p>Suivez les instructions du jeu et profitez de l'expérience</p>
                    </div>
                </div>
            </section>
        </>
    )
}