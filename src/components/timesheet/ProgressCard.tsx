
export const ProgressCard = () => {
    return (
        <div className="flex items-center">
            <div className="bg-gradient-to-br from-[#FFC107] to-[#FFB300] rounded-[32px] p-6 flex items-center justify-between shadow-[0_8px_30px_rgb(255,193,7,0.3)] w-full max-w-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl" />
                    <h3 className="text-2xl font-bold text-white">Profile</h3>
                </div>
            </div>
            <div className="bg-gradient-to-tl from-[#FFF9E6] to-[#FFF3CC] rounded-r-[32px] rounded-l-[-10px] p-6 flex items-center justify-center shadow-[0_4px_20px_rgb(255,193,7,0.15)] w-full max-w-sm">
                <p className="text-3xl font-bold text-gray-900">48%</p>
            </div>
        </div>
    );
};
