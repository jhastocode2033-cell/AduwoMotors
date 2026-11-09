import aduwo from "../assets/aduwo.png"
import Link from "react-router-dom"


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
  <Link
   to="/contact"
     className="mt-5 rounded-full bg-[#d8383a] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#c02e30]"
     >
    Contact Us
   </Link>
  </div>

</div>

        </>
    )
}
