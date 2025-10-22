import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/Sidebar.css';

function Sidebar({ isOpen, onClose }:{isOpen : boolean; onClose:() => void}) {
  const navItems = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/tictactoe', label: 'Tic Tac Toe', icon: '❌' },
    { path: '/hangman', label: 'Hangman', icon: '🎯' },
    { path: '/memory', label: 'Memory', icon: '🃏' },
    { path: '/sudoku', label: 'Sudoku', icon: '🔢' },
    { path: '/about', label: 'À propos', icon: 'ℹ️' },
  ];

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      ></div>
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-logo">
            <span className="logo-icon">🎮</span>
            All Games
          </h1>
          <ThemeToggle />
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
              onClick={onClose}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>© 2025 All Games</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
