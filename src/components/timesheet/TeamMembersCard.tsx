import { MoreHorizontal } from 'lucide-react';

export const TeamMembersCard = () => {
    return (
        <div className="bg-white rounded-[40px] p-8 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-2xl cursor-pointer hover:bg-gray-50 transition-all duration-300">
            <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop"
                        alt="Sooryaa VR"
                        className="w-full h-full rounded-2xl object-cover shadow-sm"
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-gray-900">Sooryaa VR</h2>
                    <p className="text-gray-500 font-medium">Developer</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-2">
                    <MoreHorizontal className="w-10 h-10" />
                </button>
            </div>
        </div>
    );
};
