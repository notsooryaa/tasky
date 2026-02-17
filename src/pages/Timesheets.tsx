import { useLocation } from "@tanstack/react-router";
import { Header } from "../components/ui/Header";
import type { headerPages } from "../utils/HeaderHelper";
import { TeamMembersCard } from "../components/timesheet/TeamMembersCard";
import { ProgressCard } from "../components/timesheet/ProgressCard";
import SubHeader from "../components/ui/SubHeader";

function Timesheets() {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    return (
        <>
            <Header page={path as keyof typeof headerPages} />
            <div className="flex flex-col items-center gap-6 bg-[#F9F9F9] min-h-screen p-6 rounded-tl-2xl pt-25">
                <div className="w-full flex flex-col items-center justify-center gap-6">
                    <SubHeader />
                    <TeamMembersCard />
                    <ProgressCard />
                </div>
            </div>
        </>
    );
}

export default Timesheets;
