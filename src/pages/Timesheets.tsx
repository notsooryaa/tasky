import { useLocation } from "@tanstack/react-router";
import { Header } from "../components/ui/Header";
import type { headerPages } from "../utils/HeaderHelper";

function Timesheets() {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    return (
        <>
            <Header page={path as keyof typeof headerPages} />
            <div className="flex flex-col items-center gap-6 bg-[#F9F9F9] h-screen p-6 rounded-tl-2xl pt-25">
                <div className="flex flex-row items-center justify-between w-full p-2">
                    <h1 className="text-4xl font-medium text-gray-900">Timesheets</h1>
                </div>
                <div className="w-full">
                    <p className="text-gray-600">Timesheets page content coming soon...</p>
                </div>
            </div>
        </>
    );
}

export default Timesheets;
