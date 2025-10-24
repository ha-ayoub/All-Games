import { useEffect, useState } from "react";

interface HangmanProps {
  errors: number;
}

const Hangman = ({ errors }: HangmanProps) => {

  const [isSwinging, setIsSwinging] = useState(false);

  useEffect(() => {
    if (errors > 0) {
      setIsSwinging(true);
      setTimeout(() => setIsSwinging(false), 1000);
    }
  }, [errors]);

  const parts = [
    <circle key="head" cx="140" cy="60" r="20" className="hangman-hangman-part" />,
    <line key="body" x1="140" y1="80" x2="140" y2="140" className="hangman-hangman-part" />,
    <line key="left-arm" x1="140" y1="95" x2="115" y2="120" className="hangman-hangman-part" />,
    <line key="right-arm" x1="140" y1="95" x2="165" y2="120" className="hangman-hangman-part" />,
    <line key="left-leg" x1="140" y1="140" x2="120" y2="170" className="hangman-hangman-part" />,
    <line key="right-leg" x1="140" y1="140" x2="160" y2="170" className="hangman-hangman-part" />
  ];

  return (
    <div className="hangman-hangman-container">
      <svg className="hangman-hangman-svg" viewBox="0 0 200 220">
        <line x1="10" y1="210" x2="150" y2="210" stroke="#000" strokeWidth="4" />
        <line x1="40" y1="210" x2="40" y2="20" stroke="#000" strokeWidth="4" />
        <line x1="40" y1="20" x2="140" y2="20" stroke="#000" strokeWidth="4" />
        <line x1="140" y1="20" x2="140" y2="40" stroke="#000" strokeWidth="4" />

        <g
          stroke="#720d01ff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className={isSwinging ? 'hangman-body-swing' : ''}>
          {parts.slice(0, errors)}
        </g>
      </svg>
    </div>
  );
};

export default Hangman;