import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="theme-toggle-icon theme-icon-light">
        <Sun size={18} />
      </span>
      <span className="theme-toggle-icon theme-icon-dark">
        <Moon size={18} />
      </span>
      <span className="theme-toggle-slider" />
    </button>
  );
}

export default ThemeToggle;