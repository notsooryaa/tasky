import { ChevronRight } from 'lucide-react';

type ProgressCardProps = {
    title?: string;
    progress?: number;
    subtitle?: string;
};

export const ProgressCard = ({
    title = 'Profile Interface',
    progress = 48,
    subtitle = 'Current sprint progress',
}: ProgressCardProps) => {
    return (
        <div className="flex w-full flex-col items-stretch sm:flex-row sm:items-center">
            <div className="relative z-10 flex w-full items-center justify-between rounded-4xl bg-linear-to-br from-[#FFC107] to-[#FFB300] p-6 pr-10 shadow-[0_8px_30px_rgb(255,193,7,0.3)] sm:w-[62%]">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/30 backdrop-blur-sm" />
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A5600]">Focus</p>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
                    </div>
                </div>
            </div>
            <div className="-mt-4 flex w-full items-center justify-center rounded-b-4xl border border-white/20 bg-yellow-500/20 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-sm sm:-ml-8 sm:mt-0 sm:w-[48%] sm:rounded-b-none sm:rounded-r-4xl sm:pl-12">
                <div className="flex items-center gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A6A00]">{subtitle}</p>
                        <p className="text-3xl font-bold text-gray-900">{progress}%</p>
                    </div>
                    <ChevronRight className="h-10 w-10 text-gray-700 font-bold" strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
};
