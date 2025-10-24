import type { Theme } from "../utils/types";

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSelector= ({ currentTheme, onThemeChange }: ThemeSelectorProps) => {
  return (
    <div className="hangman-theme-selector">
      <label htmlFor="theme">Thème:</label>
      <select 
        id="theme" 
        value={currentTheme}
        onChange={(e) => onThemeChange(e.target.value as Theme)}
      >
        <option value="pays">Pays</option>
        <option value="villes">Villes</option>
        <option value="fruits">Fruits & Légumes</option>
      </select>
    </div>
  );
};

export default ThemeSelector;