import { MoreVertical } from "lucide-react";

interface ActivityCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export const ActivityCard = ({ title, value, icon }: ActivityCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 w-[50%]">
      <div className="flex justify-between items-start mb-6 gap-14">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={24} />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-3xl font-semibold text-gray-900">{value}</div>
        <div className="bg-amber-50 p-4 rounded-2xl">
          {icon}
        </div>
      </div>
    </div>
  );
};
