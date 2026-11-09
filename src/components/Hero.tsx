import herocars from '../assets/herocars.png'

export default function Hero(){

    return(
        <>
<section className="bg-[#091733] text-white me-auto font-[Montserrat] rounded-b-3xl">

    <div className="flex flex-col items-center text-center px-6 pt-10">
        <p className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tight">BEST CARS</p>
        <p className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tight">BEST DEALS!</p>
        <p className="mt-1 text-base md:text-lg italic font-medium tracking-[0.12em] text-[#bcd6f2]">...Reliability Redifined</p>
        <p className=" text-base md:text-xs italic font-medium tracking-[0.01em] text-[#bcd6f2]">Lagos, Akure, Okitipupa cars for sale </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-[#d8383a] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c02e30]">See Available Cars</button>
            <button className="rounded-full border-2 border-white/50 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">Contact Us</button>
        </div>
        <img src={herocars} alt="" className="mt-1 w-full max-w-5xl [mask-image:linear-gradient(to_bottom,transparent,black_30%)]" />
    </div>
</section>
        </>
    )
}