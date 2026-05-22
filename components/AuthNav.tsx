import Image from "next/image"

export default function AuthNav(){
    return(
        <nav className='w-full p-5 px-20 border-[#2A1B5A] border-b'>
            <div className="max-w-[1400px] m-auto">
                <a href="/" className='flex items-center gap-2 w-10'>
                    <Image
                        src="/logoE.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-lg"
                    />
                    <span className='text-3xl text-white' >Evolv</span>
                </a>
            </div>
        </nav>
    )
}