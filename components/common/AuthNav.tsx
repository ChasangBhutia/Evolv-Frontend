import Image from "next/image"
import Link from "next/link"

export default function AuthNav() {
    return (
        <nav className='w-full p-5 px-20 border-[#2A1B5A] border-b'>
            <div className="max-w-[1400px] m-auto">
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
            </div>
        </nav>
    )
}