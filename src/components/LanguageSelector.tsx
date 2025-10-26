import { useLanguage } from '../hooks/useLanguage';
import { LANGUAGES } from '../i18n/langagues';
import '../styles/LanguageSelector.css';
import type { LanguageCode } from '../i18n/translations';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as LanguageCode);
  };

  return (
    <select
      id="language-select"
      value={language}
      onChange={handleChange}
      className="language-select"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag}&nbsp;&nbsp;{lang.name}
        </option>
      ))}
    </select>
  );
}