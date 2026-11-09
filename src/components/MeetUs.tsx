

export default function MeetUs(){

    return(
        <>
         <section className="bg-white font-[Montserrat] py-20 px-6">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                <div className="flex min-h-[320px] items-center justify-center rounded-3xl bg-[#bcd6f2] text-[#091733]">
                    {/* swap for a photo of your showroom: <img src={showroom} alt="" className="h-full w-full rounded-3xl object-cover" /> */}
                    <p className="text-xl font-semibold">Your showroom photo here</p>
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#091733]">Meet us in person</h2>
                    <h3 className="mt-4 text-xl font-semibold text-[#091733]">Aduwo Motors Office</h3>

                    <p className="mt-3 text-[#5a6b86]">Business hours: Mon-Sat 9am - 6pm</p>
                    <p className="mt-3 text-[#5a6b86]">Tel: 08034639396, 08058556206</p>
                    <p className="mt-3 text-[#5a6b86]">Address: 67, Oyemekun Road, Akure, Ondo State.</p>

                    <a
                        href="tel:08034639396"
                        className="mt-8 inline-block rounded-full bg-[#d8383a] px-7 py-3 font-semibold text-white transition hover:bg-[#c02e30]"
                    >
                        Call to book a viewing
                    </a>
                </div>
            </div>
        </section>

        </>
    )
}