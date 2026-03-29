type Member = {
    id: number;
    teamName: string;
    shortName: string;
    avatars: string[];
    accent: string;
    tasks: Array<{
        id: number;
        label: string;
        startWeek: number;
        span: number;
        progress?: number;
        tone?: 'solid' | 'soft';
    }>;
};

type TimesheetBoardCardProps = {
    members: Member[];
    activeWeek?: number;
};

const weekLabels = ['W01', 'W02', 'W03', 'W04', 'W05'];

const barToneClasses = {
    solid: 'bg-[#FFC814] text-[#4C3A00] shadow-[0_12px_30px_rgba(255,200,20,0.35)]',
    soft: 'bg-[#FFF1A6] text-[#9A6A00] shadow-[0_10px_24px_rgba(255,214,83,0.22)]',
};

export const TimesheetBoardCard = ({
    members,
    activeWeek = 4,
}: TimesheetBoardCardProps) => {
    return (
        <section className="w-full rounded-[36px] bg-white p-4 sm:p-6 lg:p-8">
            <div className="overflow-hidden rounded-[28px] border border-[#EEF2F7]">
                <div
                    className="grid"
                    style={{
                        minWidth: 980,
                        gridTemplateColumns: '260px repeat(5, minmax(160px, 1fr))',
                    }}
                >
                    <div className="border-b border-r border-[#EEF2F7] bg-[#FBFCFE] px-7 py-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B0B7C5]">
                            Team Members
                        </p>
                    </div>

                    {weekLabels.map((weekLabel, index) => {
                        const weekNumber = index + 1;
                        const isActive = weekNumber === activeWeek;

                        return (
                            <div
                                key={weekLabel}
                                className={`border-b border-[#EEF2F7] px-4 py-8 text-center text-sm font-semibold tracking-[0.18em] ${
                                    index < weekLabels.length - 1 ? 'border-r' : ''
                                } ${isActive ? 'bg-[#FFF9E8] text-[#D89400]' : 'bg-white text-[#B0B7C5]'}`}
                            >
                                {weekLabel}
                            </div>
                        );
                    })}

                    {members.map((member, rowIndex) => (
                        <div key={member.id} className="contents">
                            <div
                                className={`flex items-center gap-4 border-r border-[#EEF2F7] px-7 py-9 ${
                                    rowIndex < members.length - 1 ? 'border-b' : ''
                                } bg-white`}
                            >
                                <div className="flex -space-x-3">
                                    {member.avatars.map((avatar, avatarIndex) => (
                                        <div
                                            key={`${member.id}-${avatar}`}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[11px] font-semibold text-white shadow-sm"
                                            style={{
                                                background: avatarIndex === 0 ? member.accent : '#111827',
                                            }}
                                        >
                                            {avatar}
                                        </div>
                                    ))}
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-[22px] font-semibold text-[#222834]">
                                        {member.teamName}
                                    </p>
                                    <p className="mt-1 text-sm text-[#98A2B3]">{member.shortName}</p>
                                </div>
                            </div>

                            <div
                                className={`relative col-span-5 overflow-hidden ${
                                    rowIndex < members.length - 1 ? 'border-b border-[#EEF2F7]' : ''
                                }`}
                                style={{ minHeight: 108 }}
                            >
                                <div
                                    className="absolute inset-0 grid"
                                    style={{ gridTemplateColumns: 'repeat(5, minmax(160px, 1fr))' }}
                                >
                                    {weekLabels.map((weekLabel, index) => (
                                        <div
                                            key={`${member.id}-${weekLabel}`}
                                            className={`h-full ${
                                                index < weekLabels.length - 1 ? 'border-r border-[#EEF2F7]' : ''
                                            } ${index + 1 === activeWeek ? 'bg-[#FFFBEF]' : 'bg-white'}`}
                                        />
                                    ))}
                                </div>

                                <div className="relative flex h-full items-center px-4">
                                    {member.tasks.map((task) => {
                                        const progressWidth = task.progress ? `${Math.min(task.progress, 100)}%` : undefined;

                                        return (
                                            <div
                                                key={task.id}
                                                className={`absolute top-1/2 flex -translate-y-1/2 items-center justify-between px-5 text-sm font-semibold uppercase tracking-[0.08em] ${
                                                    barToneClasses[task.tone ?? 'solid']
                                                }`}
                                                style={{
                                                    height: 46,
                                                    borderRadius: 16,
                                                    left: `calc(${(task.startWeek - 1) * 20}% + 18px)`,
                                                    width: `calc(${task.span * 20}% - 36px)`,
                                                }}
                                            >
                                                <span className="truncate pr-4">{task.label}</span>
                                                {typeof task.progress === 'number' ? (
                                                    <span className="shrink-0 text-[13px] font-bold">{progressWidth}</span>
                                                ) : null}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export type { Member };