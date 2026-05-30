"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const noSidebarRoutes = ["/auth/register", "/auth/login", "/"];

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideSidebar = noSidebarRoutes.includes(pathname);

    if (hideSidebar) {
        return <>{children}</>;
    }

    return (
        <div className="flex h-screen overflow-hidden">

            {/* SIDEBAR */}
            <Sidebar />

            {/* MAIN CONTENT */}
            <main className="flex-1 overflow-y-auto bg-[#0B1120]">
                {children}
            </main>

        </div>
    );
}