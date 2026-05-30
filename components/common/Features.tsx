import { CheckCircle2, ListTodo, Bot, DollarSign } from "lucide-react";

const FEATURES_DATA = [
  {
    icon: CheckCircle2,
    title: "Habit Builder",
    description: "Establish positive routines and break bad habits. Visual streaks and daily trackers keep you motivated, consistent, and accountable.",
    colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40",
    shadowClass: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
    glowColor: "rgba(16, 185, 129, 0.08)",
  },
  {
    icon: ListTodo,
    title: "Intelligent Tasks",
    description: "Organize your daily chores, long-term goals, and projects in one beautiful place. Prioritize, schedule, and check off items effortlessly.",
    colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/40",
    shadowClass: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]",
    glowColor: "rgba(245, 158, 11, 0.08)",
  },
  {
    icon: Bot,
    title: "AI Insights",
    description: "Receive personalized feedback, productivity tips, and customized challenge recommendations based on your behavior and goals.",
    colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40",
    shadowClass: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
    glowColor: "rgba(168, 85, 247, 0.08)",
  },
  {
    icon: DollarSign,
    title: "Finance Monitor",
    description: "Log income and expenses, set savings goals, and understand your financial health through interactive visualizations and summaries.",
    colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/40",
    shadowClass: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]",
    glowColor: "rgba(99, 102, 241, 0.08)",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-10 max-w-[1300px] mx-auto overflow-visible scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3.5 py-1 rounded-full mb-5 shadow-sm">
          Features
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Everything you need to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500">
            evolve.
          </span>
        </h2>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Supercharge your personal growth with tools designed to help you build habits, manage tasks, save money, and get AI insights.
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 on md, 4 on lg */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES_DATA.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`group relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${feature.shadowClass}`}
            >
              {/* Radial gradient glow behind card on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.glowColor}, transparent 70%)`,
                }}
              />

              <div>
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 border ${feature.colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
