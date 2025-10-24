import type { Theme } from "../utils/types";

interface GameThemeProps{ 
  themes: Theme[]; 
  currentTheme: Theme; 
  onThemeChange: (theme: Theme) => void;
}

export default function GameTheme( { themes, currentTheme, onThemeChange}: GameThemeProps) {
return (
    <div className="memory-section">
      <h3>Theme</h3>
      <div className="memory-theme-grid">
        {themes.map(theme => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme)}
            className={`memory-theme-card ${currentTheme.id === theme.id ? 'active' : ''}`}
            title={theme.name}
          >
            <span className="memory-theme-icon">{theme.icon}</span>
            <span className="memory-theme-name">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}