import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

// const TicTacToe = React.lazy(() => import('./games/tictactoe'));
// const Hangman = React.lazy(() => import('./games/hangman'));
// const Memory = React.lazy(() => import('./games/memory'));
// const Sudoku = React.lazy(() => import('./games/sudoku'));

function App() {

  return (
   <ThemeProvider>
      <Router>
        <Layout>
          <Suspense fallback={
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Chargement du jeu...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tictactoe" element={<About />} />
              <Route path="/hangman" element={<About />} />
              <Route path="/memory" element={<About />} />
              <Route path="/sudoku" element={<About />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
