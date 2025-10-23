export default function HelpTrick() {
    return (
        <section className="help-section">
            <h2>Astuces & Conseils</h2>
            <div className="tips-grid">
                <div className="tip-card">
                    <div className="tip-icon">🌘</div>
                    <h3>Utilisez le mode sombre</h3>
                    <p>Jouez confortablement le soir en activant le mode sombre via le toggle dans la sidebar.</p>
                </div>

                <div className="tip-card">
                    <div className="tip-icon">📱</div>
                    <h3>Jouez en déplacement</h3>
                    <p>Tous les jeux sont optimisés pour mobile. Ajoutez le site à votre écran d'accueil pour un accès rapide.</p>
                </div>

                <div className="tip-card">
                    <div className="tip-icon">🔍</div>
                    <h3>Recherche rapide</h3>
                    <p>Utilisez la barre de recherche sur la page d'accueil pour trouver rapidement un jeu.</p>
                </div>
            </div>
        </section>
    )
}