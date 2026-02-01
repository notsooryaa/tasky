import { 
  LayoutDashboard, 
  BarChart3, 
  Clock, 
  CheckSquare, 
  FileText, 
  Settings 
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'timesheets', label: 'Timesheets', icon: Clock },
  { id: 'todo', label: 'Todo', icon: CheckSquare },
  { id: 'report', label: 'Report', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
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
      <div className="p-6 flex items-center justify-center">
        <h1 className={`
          font-bold text-[#000000] text-center
          transition-all duration-300 text-2xl
        `}>
          T
          <span className={`text-[#000000] transition-all ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>ASK</span>
          <span className={`text-[#FABB18] transition-all ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>Y.</span>
        </h1>
      </div>

      <div className="flex-1 py-6 px-3">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200 ease-in-out
                    ${isActive 
                      ? 'bg-[#000000]' 
                      : 'hover:bg-gray-200'
                    }
                  `}
                  title={item.label}
                >
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
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
