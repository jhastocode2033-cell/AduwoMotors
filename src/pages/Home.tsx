import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import MeetUs from "../components/MeetUs"
import CarSegment from "../components/CarSegment"

export default function Home(){

    return(
        <>
        <div>
            <title>AduwoMotors | Official Site | Lagos, Akure and Okitipupa Cars</title>
            <NavBar/>
            <Hero/>
            <CarSegment/>
            <MeetUs/>
            <Footer/>
        </div>
        </>
    )
}