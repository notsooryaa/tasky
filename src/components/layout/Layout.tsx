import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../ui/Navbar";

export function Layout() {
    return (
        <div className="flex">
            <Navbar />
            <main className="ml-20 flex-1 transition-all duration-300">
                <Outlet />
            </main>
        </div>
    );
}
