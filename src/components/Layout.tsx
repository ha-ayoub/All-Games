import { useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../styles/Layout.css';
import type { LayoutProps } from '../utils/types';

function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="main-content">
        <button 
          className="mobile-menu-btn"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;