import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const SubHeader = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1));
    const [selectedProject, setSelectedProject] = useState('Project 1');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const projects = ['Project 1', 'Project 2', 'Project 3'];

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        };
        return date.toLocaleDateString('en-US', options).replace(',', ', ');
    };

    const handlePreviousDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    const handleToday = () => {
        setCurrentDate(new Date());
    };

    const handleProjectSelect = (project: string) => {
        setSelectedProject(project);
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
            <div className="flex items-center gap-4">
                <button
                    onClick={handleToday}
                    className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-medium text-sm hover:bg-yellow-500 transition-colors"
                >
                    Today
                </button>

                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <button
                        onClick={handlePreviousDay}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                        aria-label="Previous day"
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>

                    <span className="text-sm font-medium text-gray-700 min-w-[180px] text-center">
                        {formatDate(currentDate)}
                    </span>

                    <button
                        onClick={handleNextDay}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                        aria-label="Next day"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {selectedProject}
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {projects.map((project) => (
                            <button
                                key={project}
                                onClick={() => handleProjectSelect(project)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${project === selectedProject ? 'bg-gray-100 font-medium' : ''
                                    }`}
                            >
                                {project}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubHeader;