import { Suspense, lazy, type LazyExoticComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Layout from './components/Layout';
import Home from './pages/home/Home.tsx';
import About from './pages/about/About.tsx';
import { GAMES_CONFIG } from './config/games.config';
import Help from './pages/help/Help.tsx';

interface GameModule {
  default: React.ComponentType;
}

const modules = import.meta.glob<GameModule>("./games/*/index.tsx");

const gameComponents: Record<string, LazyExoticComponent<React.ComponentType>> =
  Object.fromEntries(
    Object.entries(modules).map(([path, loader]) => {
      const id = path.split("/")[2];
      return [id, lazy(() => (loader as () => Promise<GameModule>)())];
    })
  );

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Suspense fallback={
            <div className="loading-container">
              <div className="loading-spinner" />
              <p className="loading-text">Chargement du jeu...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              
              {GAMES_CONFIG.map(game => {
                const GameComponent = gameComponents[game.id];
                return (
                  <Route 
                    key={game.id}
                    path={game.path} 
                    element={<GameComponent />} 
                  />
                );
              })}
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;