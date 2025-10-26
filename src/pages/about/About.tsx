import { useTranslation } from '../../hooks/useTranslation';
import '../../styles/About.css';
import AboutDev from './AboutDev';
import AboutGames from './AboutGames';
import AboutProject from './AboutProject';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="about-content">
        <header className="about-header">
          <h1>{t.about.title}</h1>
          <p className="about-subtitle">
            {t.about.subtitle}
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