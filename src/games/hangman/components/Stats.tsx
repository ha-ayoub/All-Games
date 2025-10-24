interface StatsProps {
  errors: number;
  maxErrors: number;
}

const Stats= ({ errors, maxErrors }: StatsProps) => {
  return (
    <div className="hangman-stats">
      <h3>Tentatives</h3>
      <div className="hangman-errors-count">{errors} / {maxErrors}</div>
    </div>
  );
};

export default Stats;