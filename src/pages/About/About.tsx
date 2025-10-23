import '../../styles/About.css';
import AboutDev from './AboutDev';
import AboutGames from './AboutGames';
import AboutProject from './AboutProject';

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
        <AboutProject />
        <AboutGames />
        <AboutDev />
      </div>
    </div>
  );
}

export default About;