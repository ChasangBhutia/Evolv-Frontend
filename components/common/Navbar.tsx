"use client";

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { Home, Sparkles, CircleDollarSign, MessageSquareText, ChevronRight, ArrowRight, LogIn } from 'lucide-react';

const MOBILE_NAV = [
    {
        title: "Home",
        icon: Home,
        url: '/',
        colorClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
        title: "Features",
        icon: Sparkles,
        url: '#features',
        colorClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    {
        title: "Testimonials",
        icon: MessageSquareText,
        url: '#testimonal',
        colorClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    },
    {
        title: "Pricing",
        icon: CircleDollarSign,
        url: '#pricing',
        colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
]

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className={`w-full h-17 fixed top-0 left-0 right-0 z-[99] transition-all duration-300 py-3 ${isOpen
                ? "bg-transparent border-transparent"
                : "bg-[#070A12]/80 backdrop-blur-md border-b border-zinc-800/40"
                }`}>
                <div className="flex justify-between items-center max-w-[1300px] m-auto px-4 sm:px-10 h-full">
                    {/* Logo & Identity with mount transition */}
                    <Link
                        href="/"
                        className="flex gap-2.5 items-center group transition-transform duration-300 hover:scale-[1.01] opacity-0 animate-fade-in-up"
                        onClick={() => setIsOpen(false)}
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

                    {/* Desktop Nav Items with staggered mount transitions */}
                    <nav className="hidden md:flex items-center gap-8 text-zinc-400 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                        <Link className="relative py-1 text-sm font-medium hover:text-zinc-100 transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500 after:transition-all after:duration-300" href="/">Home</Link>
                        <Link className="relative py-1 text-sm font-medium hover:text-zinc-100 transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500 after:transition-all after:duration-300" href="#features">Features</Link>
                        <Link className="relative py-1 text-sm font-medium hover:text-zinc-100 transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500 after:transition-all after:duration-300" href="#testimonal">Testimonials</Link>
                        <Link className="relative py-1 text-sm font-medium hover:text-zinc-100 transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500 after:transition-all after:duration-300" href="#pricing">Pricing</Link>
                    </nav>

                    {/* Desktop Action Button with mount transition */}
                    <div className="hidden md:flex opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                        <button
                            className="group bg-zinc-900/80 border border-zinc-850 hover:border-zinc-700 hover:bg-zinc-800/40 px-4 py-1.5 rounded-lg text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
                            onClick={() => router.push('/auth/login')}
                        >
                            <span>Login</span>
                            <LogIn className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                        </button>
                    </div>

                    {/* Hamburger Toggle */}
                    <div className="md:hidden z-[99] text-white">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} duration={0.4} />
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay (Sibling of header to prevent container height clipping) */}
            {
                isOpen && (
                    <nav className="md:hidden fixed inset-0 flex flex-col bg-[#070A12]/98 backdrop-blur-xl h-screen w-full z-[98] pt-24 pb-8 px-8">
                        {/* Cohesive background grid pattern matching Hero section */}
                        <div className="absolute inset-0 bg-grid-pattern bg-radial-mask pointer-events-none opacity-15" />

                        {/* Navigation Links list (Structured and Left-Aligned) */}
                        <div className="flex flex-col gap-5 relative z-10 w-full mt-4">
                            {
                                MOBILE_NAV.map((item, index) => {
                                    return (
                                        <Link
                                            key={item.title}
                                            className="opacity-0 translate-y-3 animate-fade-in-up text-lg font-medium text-zinc-400 hover:text-white transition-colors duration-200 border-b border-zinc-900/60 pb-3 w-full"
                                            style={{ animationDelay: `${index * 60}ms`, animationFillMode: "forwards" }}
                                            href={item.url}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span>{item.title}</span>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex flex-col gap-3 mt-auto relative z-10 w-full">
                            <button
                                className="group border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 rounded-lg h-11 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer text-zinc-350 hover:text-white w-full"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push('/auth/login');
                                }}
                            >
                                <span>Login</span>
                                <LogIn className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                            </button>
                            <button
                                className="group bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg h-11 text-sm font-semibold shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer text-white w-full"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push('/auth/login');
                                }}
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </nav>
                )
            }
        </>
    )
}