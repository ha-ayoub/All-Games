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
                <p>Le classique jeu de morpion pour deux joueurs</p>
              </div>
            </div>
            <div className="game-info">
              <span className="game-emoji">🎯</span>
              <div>
                <h3>Hangman</h3>
                <p>Devinez le mot lettre par lettre</p>
              </div>
            </div>
            <div className="game-info">
              <span className="game-emoji">🃏</span>
              <div>
                <h3>Memory Card</h3>
                <p>Testez votre mémoire en retrouvant les paires</p>
              </div>
            </div>
            <div className="game-info">
              <span className="game-emoji">🔢</span>
              <div>
                <h3>Sudoku</h3>
                <p>Résolvez la grille de logique</p>
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