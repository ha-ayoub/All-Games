import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <header className="about-header">
          <h1>À propos</h1>
          <p className="about-subtitle">
            Découvrez ce projet et son créateur
          </p>
        </header>

        <section className="about-section">
          <h2>📖 Le Projet</h2>
          <p>
            All Games est une collection de mini-jeux classiques développée avec React et Vite.
            Ce projet rassemble quatre jeux populaires dans une interface moderne et intuitive.
          </p>
          <p>
            L'objectif principal était de créer une plateforme unifiée et professionnelle
            pour héberger plusieurs jeux indépendants, avec une expérience utilisateur fluide
            et un design moderne.
          </p>
        </section>

        <section className="about-section">
          <h2>🎮 Les Jeux</h2>
          <div className="games-list">
            <div className="game-info">
              <span className="game-emoji">❌</span>
              <div>
                <h3>Tic Tac Toe</h3>
                <p><strong>Objectif :</strong> Alignez 3 symboles (X ou O) horizontalement, verticalement ou en diagonale.</p>
                <p><strong>Comment jouer :</strong> Cliquez sur une case vide pour placer votre symbole. Jouez à tour de rôle avec votre adversaire.</p>
              </div>
            </div>
            <div className="game-info">
              <span className="game-emoji">🎯</span>
              <div>
                <h3>Hangman</h3>
                <p><strong>Objectif :</strong> Devinez le mot mystère lettre par lettre avant que le pendu ne soit complet.</p>
                <p><strong>Comment jouer :</strong> Cliquez sur les lettres pour deviner. Attention aux erreurs !</p>
              </div>
            </div>
            <div className="game-info">
              <span className="game-emoji">🃏</span>
              <div>
                <h3>Memory Card</h3>
                <p><strong>Objectif :</strong> Retrouvez toutes les paires de cartes identiques.</p>
                <p><strong>Comment jouer :</strong> Cliquez sur deux cartes pour les retourner. Si elles correspondent, elles restent visibles.</p>
              </div>
            </div>
            <div className="game-info">
              <span className="game-emoji">🔢</span>
              <div>
                <h3>Sudoku</h3>
                <p><strong>Objectif :</strong> Remplissez la grille avec les chiffres de 1 à 9 sans répétition.</p>
                <p><strong>Comment jouer :</strong> Cliquez sur une case et sélectionnez un chiffre. Chaque ligne, colonne et région doit contenir les chiffres 1-9.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>🛠️ Technologies</h2>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Vite</span>
            <span className="tech-badge">React Router</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">TypeScript</span>
          </div>
        </section>

        <section className="about-section">
          <h2>👨‍💻 Le Développeur</h2>
          <p>
            {/* Personnalisez cette section avec les informations souhaitées */}
            Projet développé avec passion par un développeur passionné de jeux et de code propre.
          </p>
          <div className="social-links">
            {/* Ajout des liens dans cet endroit */}
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Portfolio</a>
          </div>
        </section>

        <section className="about-section">
          <h2>📝 Caractéristiques</h2>
          <ul className="features-list">
            <li>✨ Interface moderne et épurée</li>
            <li>🌓 Mode sombre / clair</li>
            <li>📱 Design responsive</li>
            <li>🎯 Navigation intuitive</li>
            <li>⚡ Performances optimisées</li>
            <li>🎨 Animations fluides</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;