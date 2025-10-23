import { Suspense, lazy, type LazyExoticComponent, type JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/About';
import { GAMES_CONFIG } from './config/games.config';
import Help from './pages/help/Help';

type GameComponents = Record<string, LazyExoticComponent<() => JSX.Element>>;

const gameComponents: GameComponents = Object.fromEntries(
  GAMES_CONFIG.map((game) => [ game.id, lazy(() => import(`./games/${game.id}`)),]));

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