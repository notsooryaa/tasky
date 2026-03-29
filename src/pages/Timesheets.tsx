import { useLocation } from "@tanstack/react-router";
import { Header } from "../components/ui/Header";
import type { headerPages } from "../utils/HeaderHelper";
import { TimesheetBoardCard } from "../components/timesheet/TimesheetBoardCard";
import SubHeader from "../components/ui/SubHeader";

const timesheetMembers = [
    {
        id: 1,
        teamName: 'UX Researchers',
        shortName: 'Discovery squad',
        avatars: ['UR', 'AN'],
        accent: '#0F172A',
        tasks: [
            {
                id: 101,
                label: 'Profile Interface',
                startWeek: 2,
                span: 2,
                progress: 48,
                tone: 'solid' as const,
            },
        ],
    },
    {
        id: 2,
        teamName: 'Design Architecture',
        shortName: 'Systems team',
        avatars: ['DA'],
        accent: '#1D4ED8',
        tasks: [
            {
                id: 201,
                label: 'Login Flow Revamp',
                startWeek: 4,
                span: 2,
                tone: 'soft' as const,
            },
        ],
    },
    {
        id: 3,
        teamName: 'User Interface Design',
        shortName: 'Product visuals',
        avatars: ['UI', 'DS'],
        accent: '#111827',
        tasks: [
            {
                id: 301,
                label: 'Testimonials Widget',
                startWeek: 2,
                span: 3,
                progress: 61,
                tone: 'solid' as const,
            },
        ],
    },
    {
        id: 4,
        teamName: 'Prototyping',
        shortName: 'Rapid validation',
        avatars: ['PR'],
        accent: '#334155',
        tasks: [
            {
                id: 401,
                label: 'Menu Interactions',
                startWeek: 5,
                span: 1,
                tone: 'soft' as const,
            },
        ],
    },
];

function Timesheets() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <Header page={path as keyof typeof headerPages} />
            <div className="min-h-screen rounded-tl-2xl bg-[#F9F9F9] px-4 pb-10 pt-25 sm:px-6">
                <div className="mx-auto flex w-full max-w-355 flex-col gap-6">
                    <div>
                        <SubHeader />
                    </div>

                    <div className="overflow-x-auto">
                        <TimesheetBoardCard members={timesheetMembers} activeWeek={4} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Timesheets;
