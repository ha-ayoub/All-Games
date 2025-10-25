import '../../styles/Sidebar.css';
import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>

        <SidebarHeader onClose={onClose} />
        <SidebarNav onClose={onClose} />
        <SidebarFooter />

      </aside>
    </>
  );
}

export default Sidebar;