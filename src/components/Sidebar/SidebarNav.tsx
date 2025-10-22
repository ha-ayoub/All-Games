import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../config/games.config";

interface SidebarProps {
    onClose: () => void;
}

export default function SidebarNav({ onClose }: SidebarProps) {
  return (
            <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `nav-item ${isActive ? 'active' : ''}`
                }
                onClick={onClose}
                style={item.color ? { '--nav-color': item.color } as React.CSSProperties : undefined}
              >
                <span className="nav-icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className="nav-label">{item.label}</span>
                <span className="nav-indicator" />
              </NavLink>
            );
          })}
        </nav>
  )
}