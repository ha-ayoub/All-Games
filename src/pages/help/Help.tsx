import '../../styles/Help.css';
import HelpHeader from './HelpHeader';
import HelpFaq from './HelpFaq';
import HelpTrick from './HelpTrick';

function Help() {
  return (
    <div className="help-container">
      <div className="help-content">
        <HelpHeader />
        <HelpFaq />
        <HelpTrick />
      </div>
    </div>
  );
}

export default Help;