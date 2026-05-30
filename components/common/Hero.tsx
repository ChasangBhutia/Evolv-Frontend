"use client"

import Image from "next/image";
import { CheckCircle2, DollarSign, Bot, ArrowRight, ListTodo } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative max-w-[1300px] min-h-[100dvh] mx-auto py-20 px-4 sm:px-10 md:pt-30 flex flex-col justify-between md:flex-row items-center overflow-visible">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-radial-mask pointer-events-none opacity-60" />

      {/* Title & Button Column */}
      <div className="mt-10 mb-5 text-center md:text-left z-10 flex flex-col items-center md:items-start">

        <h1 className="text-5xl lg:text-7xl w-[80%] md:w-full font-bold mx-auto md:mx-0 text-white leading-tight opacity-0 animate-fade-in-up">
          Become the best version of{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
            yourself.
          </span>
        </h1>

        {/* Desktop View CTA & Description */}
        <div className="hidden md:flex flex-col gap-7 mt-10 items-start">
          <p className="text-xl text-zinc-400 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "150ms", animationFillMode: "forwards" }}>
            Track habits, manage tasks, monitor finances, and grow daily with AI powered guidance.
          </p>
          <button 
            onClick={()=>router.push('/dashboard')}
            className="group relative w-80 h-12 text-lg bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02] cursor-pointer opacity-0 animate-fade-in-up"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Image & Floating Tags Column */}
      <div 
        className="relative w-full md:w-[50%] h-80 lg:h-100 aspect-[4/2] md:mt-20 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
      >
        
        {/* Purple Glow with slow pulse */}
        <div className="absolute w-60 h-60 bg-[#7C3AED]/35 blur-3xl rounded-full -top-10 left-10 animate-pulse-slow" />
        
        {/* Blue Glow with slow pulse */}
        <div className="absolute w-52 h-52 bg-blue-500/25 blur-3xl rounded-full bottom-0 right-0 animate-pulse-slow" style={{ animationDelay: '3s' }} />

        {/* Original Image Component */}
        <Image
          src="/landingPage.png"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Website view"
          className="object-contain relative z-10"
        />

        {/* Floating Tag 1: Habits completed (Top-Left) */}
        <div className="absolute top-[8%] left-[4%] sm:top-[12%] sm:left-[8%] bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-1.5 px-2.5 sm:p-2 sm:px-3 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-slow z-20 select-none text-[10px] sm:text-[11px] font-semibold text-white">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
          <span>Daily Habits</span>
        </div>

        {/* Floating Tag 2: Task Manager (Top-Right) */}
        <div className="absolute top-[16%] right-[4%] sm:top-[20%] sm:right-[8%] bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-1.5 px-2.5 sm:p-2 sm:px-3 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-medium z-20 select-none text-[10px] sm:text-[11px] font-semibold text-white" style={{ animationDelay: '1.5s' }}>
          <ListTodo className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          <span>Task Manager</span>
        </div>

        {/* Floating Tag 3: AI Assistant Tip (Bottom-Left) */}
        <div className="absolute bottom-[24%] left-[2%] sm:bottom-[28%] sm:left-[6%] bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-1.5 px-2.5 sm:p-2 sm:px-3 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-fast z-20 select-none text-[10px] sm:text-[11px] font-semibold text-white">
          <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
          <span>AI Insights</span>
        </div>

        {/* Floating Tag 4: Monthly Savings (Bottom-Right) */}
        <div className="absolute bottom-[10%] right-[4%] sm:bottom-[14%] sm:right-[8%] bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-1.5 px-2.5 sm:p-2 sm:px-3 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-slow z-20 select-none text-[10px] sm:text-[11px] font-semibold text-white" style={{ animationDelay: '0.8s' }}>
          <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
          <span>Savings Tracker</span>
        </div>
      </div>

      {/* Mobile View CTA & Description */}
      <div 
        className="md:hidden text-center w-[80%] mx-auto mt-8 z-10 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
      >
        <p className="text-lg text-zinc-400">
          Track habits, manage tasks, monitor finances, and grow daily with AI powered guidance.
        </p>
        <button onClick={()=> router.push('/dashboard')} className="group mt-5 w-full bg-[#7C3AED] hover:bg-[#6D28D9] p-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all cursor-pointer">
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}