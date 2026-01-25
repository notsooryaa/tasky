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

interface Member {
  id: string;
  name: string;
  projectName: string;
  task: string;
  todayTime: string;
  weekTime: string;
  avatarUrl: string;
}

interface ViewAll {
  title: string;
  onViewAll: () => void;
}

interface BreakDownCardProps {
  title?: string;
  projects?: Project[];
  activities?: Activity[];
  members?: Member[];
  onViewAll?: ViewAll;
}

export const BreakDownCard = ({ 
  title = "Projects", 
  projects, 
  activities,
  members,
  onViewAll
}: BreakDownCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={24} />
        </button>
      </div>

      <div className="space-y-4">
        {members && (
          <>
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 px-4">
              <div className="text-base text-gray-400">Member Info</div>
              <div className="text-center text-gray-400">Today</div>
              <div className="text-center text-gray-400">This Week</div>
            </div>

            {members.map((member) => (
              <div
                key={member.id}
                className="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center border border-gray-100 rounded-2xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-amber-400 p-1 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-2xl">{member.avatarUrl}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-base font-medium text-gray-900">
                      {member.projectName}
                    </p>
                    <p className="text-sm text-gray-500">{member.task}</p>
                  </div>
                </div>

                <div className="mx-auto bg-[#FFF8E8] px-5 py-3 rounded-xl text-center">
                  <span className="text-sm font-medium text-gray-900">
                    {member.todayTime}
                  </span>
                </div>

                <div className="mx-auto bg-[#FFF8E8] px-5 py-3 rounded-xl text-center">
                  <span className="text-sm font-medium text-gray-900">
                    {member.weekTime}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
        {projects &&
          projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4"
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
        {activities &&
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4"
            >
              <div className="bg-amber-100 p-3 rounded-xl">
                <img
                  src={activity.imageUrl[0]}
                  alt={activity.name}
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {activity.name}
                </h3>
              </div>
              <button
                onClick={onViewAll?.onViewAll}
                className="bg-[#FFF8E8] text-gray-900 px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                View Details
              </button>
            </div>
          ))}
      </div>

      {onViewAll && (
        <div className="flex justify-end mt-6">
          <button
            onClick={onViewAll?.onViewAll}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            {onViewAll.title}
          </button>
        </div>
      )}
    </div>
  );
};
