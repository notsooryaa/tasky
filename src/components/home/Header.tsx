import { Menu, Bell, User } from "lucide-react";
import { SearchBar } from "../ui/SearchBar";

export const Header = () => {
  return (
    <div className="flex flex-row items-center p-3 justify-between">
      <div className="flex flex-row items-center">
        <Menu className="w-5 h-5 m-4" />
        <h1 className="text-2xl font-semibold m-4">Dashboard</h1>
      </div>
      <div className="w-100">
        <SearchBar />
      </div>
      <div className="flex flex-row items-center gap-8">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-900 fill-gray-900" />
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
            12
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-right">
            <h3 className="text-lg font-semibold text-gray-900">Sooryaa VR</h3>
            <p className="text-sm text-gray-500">Developer</p>
          </div>
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
            <User className="w-8 h-8 text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};
