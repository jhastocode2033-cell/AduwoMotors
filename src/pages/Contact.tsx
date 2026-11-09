

export default function Contact(){
    
    return(
        <>
            <section className="bg-white font-[Montserrat] px-6 py-16 md:py-24">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#091733]">
                        Contact us
                    </h1>
                    <p className="mt-4 text-lg text-[#5a6b86]">
                        Call us, email us, or visit the showroom in Akure.
                    </p>
                </div>

                {/* Info cards */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2">

                    <a href="tel:08034639396" className="flex items-start gap-4 rounded-2xl border border-[#d9e4f2] p-6 transition hover:border-[#d8383a]">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#091733] text-white">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
                        </span>
                        <div>
                            <p className="font-bold text-[#091733]">Phone</p>
                            <p className="mt-1 text-[#5a6b86]">08034639396</p>
                            <p className="text-[#5a6b86]">08058556206</p>
                        </div>
                    </a>

                    <a href="mailto:info@aduwomotors.com" className="flex items-start gap-4 rounded-2xl border border-[#d9e4f2] p-6 transition hover:border-[#d8383a]">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#091733] text-white">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                        </span>
                        <div>
                            <p className="font-bold text-[#091733]">Email</p>
                            <p className="mt-1 text-[#5a6b86]">info@aduwomotors.com</p>
                        </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-2xl border border-[#d9e4f2] p-6">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#091733] text-white">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </span>
                        <div>
                            <p className="font-bold text-[#091733]">Showroom</p>
                            <p className="mt-1 text-[#5a6b86]">67, Oyemekun Road, Akure, Ondo State</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl border border-[#d9e4f2] p-6">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#091733] text-white">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        </span>
                        <div>
                            <p className="font-bold text-[#091733]">Opening hours</p>
                            <p className="mt-1 text-[#5a6b86]">Mon to Sat: 9am - 6pm</p>
                            <p className="text-[#5a6b86]">Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-[#d9e4f2]">
                    <iframe
                        title="Aduwo Motors location"
                        src="https://www.google.com/maps?q=67+Oyemekun+Road+Akure+Ondo+State&output=embed"
                        className="h-[360px] w-full"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
        </>
    )
}