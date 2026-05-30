"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
    Home,
    Target,
    ClipboardCheck,
    PiggyBank,
    Brain,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";

const navItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: Home,
    },
    {
        name: "Habits",
        href: "/habits",
        icon: Target,
    },
    {
        name: "Task",
        href: "/tasks",
        icon: ClipboardCheck,
    },
    {
        name: "Finance",
        href: "/finance",
        icon: PiggyBank,
    },
    {
        name: "AI",
        href: "/ai",
        icon: Brain,
    },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    return (
        <aside
            className={`hidden md:flex flex-col justify-between h-screen bg-[#111828] border-r border-zinc-800 p-3 transition-all duration-300 ${collapsed ? "w-20" : "w-72"
                }`}
        >
            <div>
                {/* TOP */}
                <div
                    className={`flex items-center mb-10 ${collapsed ? "justify-center" : "justify-between"
                        }`}
                >
                    {!collapsed && (
                        <Link
                            href="/"
                            className="flex gap-2.5 items-center group transition-transform duration-300 hover:scale-[1.01] opacity-0 animate-fade-in-up"
                        >
                            <Image
                                className="rounded-xl transition-transform duration-500 group-hover:rotate-6"
                                src="/logoE.png"
                                alt="Logo"
                                height={32}
                                width={32}
                            />
                            <p className="text-xl font-bold tracking-tight text-white flex items-center">
                                Evolv
                                <span className="text-[#7C3AED] ml-0.5 animate-pulse">.</span>
                            </p>
                        </Link>
                    )}

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 rounded-lg hover:bg-[#1B2433] transition"
                    >
                        {collapsed ? (
                            <PanelLeftOpen size={22} />
                        ) : (
                            <PanelLeftClose size={22} />
                        )}
                    </button>
                </div>

                {/* NAVIGATION */}
                <nav className="flex flex-col gap-3">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl p-3 transition-all ${isActive
                                    ? "bg-[#1B2433] text-white"
                                    : "text-zinc-300 hover:bg-[#1B2433]"
                                    } ${collapsed ? "justify-center" : ""}`}
                            >
                                <item.icon size={22} />
                                {!collapsed && (
                                    <span className="text-[15px] font-medium">
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* PROFILE */}
            <div
                className={`border border-zinc-700 rounded-xl p-3 flex items-center ${collapsed ? "justify-center" : "gap-4"
                    }`}
            >
                <Image
                    className="rounded-full"
                    src="/logoE.png"
                    alt="Profile"
                    height={40}
                    width={40}
                />

                {!collapsed && (
                    <div className="overflow-hidden">
                        <h3 className="font-medium truncate">
                            Chasang T. Bhutia
                        </h3>

                        <p className="text-xs text-zinc-400 truncate">
                            chasangtsering@gmail.com
                        </p>
                    </div>
                )}
            </div>
        </aside>
    );
}