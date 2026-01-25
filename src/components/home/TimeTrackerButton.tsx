import { Play } from "lucide-react";

interface TimeTrackerButtonProps {
  onClick?: () => void;
}

export const TimeTrackerButton = ({ onClick }: TimeTrackerButtonProps) => {
  return (
    <div className="bg-white rounded-4xl p-6 flex items-center justify-between w-full gap-10">
      <h2 className="text-xl font-medium text-gray-900">
        Start Time Tracker
      </h2>
      <button
        onClick={onClick}
        className="bg-amber-400 hover:bg-amber-500 p-6 rounded-3xl transition-colors"
      >
        <Play size={32} className="text-gray-900 fill-gray-900" />
      </button>
    </div>
  );
};
