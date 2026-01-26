import { Home, Briefcase, Users, Settings } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "members", label: "Members", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Tasky</div>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveLink(link.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeLink === link.id
                      ? "bg-amber-100 text-amber-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
