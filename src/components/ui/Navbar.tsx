import {
  LayoutDashboard,
  BarChart3,
  Clock,
  CheckSquare,
  FileText,
  Settings
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
  { id: 'timesheets', label: 'Timesheets', icon: Clock, path: '/timesheets' },
  { id: 'todo', label: 'Todo', icon: CheckSquare, path: '/todo' },
  { id: 'report', label: 'Report', icon: FileText, path: '/report' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
];

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav
      className={`
        fixed left-0 top-0 h-screen bg-[#FFFFFF] text-white flex flex-col z-50
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-6 flex items-center justify-center transition-all duration-200 ease-in-out">
        <h1 className={`
          font-bold text-center
          transition-all duration-300 text-2xl
          ${isExpanded ? 'ml-0 text-[#000000]' : 'ml-18 text-[#FABB18]'}
        `}>
          T
        </h1>
        <h1 className={`font-bold text-[#000000] text-center
          transition-all duration-200 text-2xl ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0'}`}>ASK</h1>
        <h1 className={`font-bold text-[#FABB18] text-center
          transition-all duration-200 text-2xl ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0'}`}>Y.</h1>
      </div>

      <div className="flex-1 py-6 px-3">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200 ease-in-out
                    ${isActive
                      ? 'bg-[#000000]'
                      : 'hover:bg-gray-200'
                    }
                  `}
                  title={item.label}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={24}
                        className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-black'}`}
                      />
                      <span className={`
                        font-medium whitespace-nowrap overflow-hidden
                        transition-all duration-300
                        ${isActive ? 'text-white' : 'text-black'}
                        ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0'}
                      `}>
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
