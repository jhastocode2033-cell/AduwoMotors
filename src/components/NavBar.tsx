import aduwo from "../assets/aduwo.png"


export default function NavBar(){

    return(
        <>

<div className="sticky top-0 z-50 bg-white px-8 py-1 flex items-center justify-between">


  <div className="flex items-center gap-3">
      <a href="/" className="hover:text-[#2d507d] transition-colors">
      <img src={aduwo} alt="Logo" className="w-[150px] h-[70px] object-contain" />
    </a>
  </div>




  <div>
    <a
      href="/contact"
      className="bg-[#d8383a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#850205] transition-colors"
    >
      Contact Us
    </a>
  </div>

</div>

        </>
    )
}
