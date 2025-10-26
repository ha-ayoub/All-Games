import { NavLink } from "react-router-dom";
import { NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../../config/games.config";
import { useTranslation } from "../../hooks/useTranslation";

interface SidebarProps {
  onClose: () => void;
}

export default function SidebarNav({ onClose }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const translatedLabel = item.path === '/' ? t.sidebar.home : item.label;
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
              <span className="nav-label">{translatedLabel}</span>
              <span className="nav-indicator" />
            </NavLink>
          );
        })}
      </nav>
      <nav className="sidebar-nav-secondary">
        {SECONDARY_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          let translatedLabel = item.label;
          if (item.path === '/about') translatedLabel = t.sidebar.about;
          if (item.path === '/help') translatedLabel = t.sidebar.help;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
              onClick={onClose}
            >
              <span className="nav-icon">
                <Icon size={20} strokeWidth={2} />
              </span>
              <span className="nav-label">{translatedLabel}</span>
              <span className="nav-indicator" />
            </NavLink>
          );
        })}
      </nav>
    </>

  )
}