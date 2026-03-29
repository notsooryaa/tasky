import { MoreHorizontal } from 'lucide-react';

type TeamMembersCardProps = {
    name?: string;
    role?: string;
    avatarText?: string;
    note?: string;
};

export const TeamMembersCard = ({
    name = 'Sooryaa VR',
    role = 'Developer',
    avatarText = 'SV',
    note = '8 teammates checked in today',
}: TeamMembersCardProps) => {
    return (
        <div className="bg-white rounded-[32px] p-6 sm:p-8 flex items-center justify-between shadow-[0_16px_40px_rgba(15,23,42,0.06)] w-full border border-slate-100 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-linear-to-br from-[#1F2937] to-[#4B5563] text-xl font-semibold text-white shadow-sm">
                    {avatarText}
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{name}</h2>
                    <p className="text-gray-500 font-medium">{role}</p>
                    <p className="mt-2 text-sm text-slate-400">{note}</p>
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
