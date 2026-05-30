"use client"

import AuthNav from '@/components/common/AuthNav';
import { Mail, Lock, Check, Brain, HandCoins } from 'lucide-react';
import Link from "next/link";
import { LoginData } from '@/types/auth.types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/queries/authQueries';

const tileData = [
    {
        icon: Check,
        title: 'Habit Tracker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.'
    }, {
        icon: HandCoins,
        title: 'Finance Manager',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.'
    }, {
        icon: Brain,
        title: 'AI-based Insights',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.'
    }
]

export default function Login() {

    const router = useRouter();
    const loginMutation = useLogin();

    const [userData, setUserData] = useState<LoginData>({
        email:'',
        password:''
    });
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState("");

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const payload : LoginData = {
                email : userData.email,
                password : userData.password
            }

            loginMutation.mutate(payload, {
                onSuccess : () => {
                    setSuccess("User logged In");
                    router.replace("/dashboard");
                },
                onError : (err : any) => {
                    setErrors(err.response.data.message);
                }
            })
        }catch(err: any){
            setErrors(err.message);
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#A78BFA]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <AuthNav />

            <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center max-w-[1200px] m-auto px-6 py-12 md:py-20 min-h-[calc(100vh-100px)] relative z-10">

                {/* Left Side: Information & Features */}
                <div className="flex flex-col items-start gap-4 flex-1 max-w-xl animate-fade-in">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#6D28D9]/15 text-[#A78BFA] border border-[#6D28D9]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                        Welcome back
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Sign in to <span className="bg-gradient-to-r from-[#A78BFA] to-[#6D28D9] bg-clip-text text-transparent">Evolv</span>
                    </h1>

                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                        Welcome back! Please enter your details to access your dashboard.
                    </p>

                    <ul className="flex flex-col gap-4 w-full mt-4">
                        {
                            tileData.map(d => {
                                const ICON = d.icon;
                                return (
                                    <li key={d.title} className="flex items-start gap-4 p-4 rounded-2xl border border-zinc-800/40 bg-zinc-900/10 backdrop-blur-sm transition-all duration-300 hover:border-[#6D28D9]/30 hover:bg-zinc-900/30 group">
                                        <div className="flex items-center justify-center p-2.5 rounded-xl bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-[#A78BFA] transition-colors duration-300 group-hover:bg-[#6D28D9]/20 group-hover:border-[#6D28D9]/40 group-hover:text-white shrink-0">
                                            <ICON size={22} className="transition-transform duration-300 group-hover:scale-110" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-100 text-base transition-colors duration-300 group-hover:text-white">{d.title}</h3>
                                            <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{d.description}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <p className="text-sm text-zinc-400 mt-6">
                        Don't have an account ?{" "}
                        <Link href="/auth/register" className="text-[#A78BFA] hover:text-[#6D28D9] font-semibold transition-colors duration-200 underline underline-offset-4 decoration-2">
                            Sign up
                        </Link>
                    </p>
                </div>

                {/* Right Side: Login Card Form */}
                <div className="w-full sm:max-w-md p-8 rounded-3xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md shadow-2xl shadow-[#6D28D9]/5 relative overflow-hidden flex flex-col gap-6">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-white">Sign In</h2>
                        <p className="text-sm text-zinc-400 mt-1">Enter your details to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                <Mail size={14} className="text-[#A78BFA]" />
                                <span>Email</span>
                            </div>
                            <input
                                onChange={handleChange}
                                className="h-11 px-3.5 w-full bg-zinc-900/30 border border-zinc-800/80 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#A78BFA] transition-all duration-200"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                <Lock size={14} className="text-[#A78BFA]" />
                                <span>Password</span>
                            </div>
                            <input
                                onChange={handleChange}
                                className="h-11 px-3.5 w-full bg-zinc-900/30 border border-zinc-800/80 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#A78BFA] transition-all duration-200"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button className="w-full h-11 mt-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-xl shadow-lg shadow-[#6D28D9]/20 hover:shadow-[#6D28D9]/40 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}