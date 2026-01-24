import { Folder, MoreVertical } from "lucide-react";

interface Project {
  id: string;
  name: string;
  time: string;
  progress: number;
}

interface Activity {
  id: string;
  name: string;
  imageUrl: string[];
}

interface BreakDownCardProps {
  title?: string;
  projects?: Project[];
  activities?: Activity[];
  onViewAll?: () => void;
}

export const BreakDownCard = ({ 
  title = "Projects", 
  projects, 
  activities,
  onViewAll
}: BreakDownCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-medium text-gray-900">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={24} />
        </button>
      </div>

      <div className="space-y-4">
        {projects && projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4"
          >
            <div className="bg-amber-100 p-3 rounded-xl">
              <Folder size={24} className="text-amber-500" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {project.name}
              </h3>
            </div>

            <div className="bg-amber-50 px-4 py-2 rounded-xl">
              <span className="text-sm font-medium text-gray-900">
                {project.time}
              </span>
            </div>

            <div className="w-64">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
        {activities && activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <img src={activity.imageUrl[0]} alt={activity.name} className="w-6 h-6 rounded-full" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{activity.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={onViewAll}
          className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
        >
          View All
        </button>
      </div>
    </div>
  );
};
