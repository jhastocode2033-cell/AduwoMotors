import { Link } from "react-router-dom"
import toyotacamry from "../assets/2012 Toyota Camry.jpg"

type Car = {
    id: number
    name: string
    year: number
    image: string
    price: string
}

const cars: Car[] = [
    { id: 1, name: "2012 Toyota Camry", year: 2012, image: toyotacamry, price: "Call for price" },
    { id: 2, name: "Lexus RX 350", year: 2012, image: toyotacamry, price: "Call for price" },
    { id: 3, name: "Toyota Highlander", year: 2013, image: toyotacamry, price: "Call for price" },
    { id: 4, name: "Honda Accord", year: 2010, image: toyotacamry, price: "Call for price" },
    { id: 5, name: "Toyota Corolla", year: 2015, image: toyotacamry, price: "Call for price" },
    { id: 6, name: "Mercedes-Benz GLK 350", year: 2012, image: toyotacamry, price: "Call for price" },
    { id: 7, name: "Toyota Sienna", year: 2011, image: toyotacamry, price: "Call for price" },
    { id: 8, name: "Lexus ES 350", year: 2013, image: toyotacamry, price: "Call for price" },
    { id: 9, name: "Honda CR-V", year: 2014, image: toyotacamry, price: "Call for price" },
    { id: 10, name: "Toyota RAV4", year: 2016, image: toyotacamry, price: "Call for price" },
    { id: 11, name: "Mercedes-Benz C300", year: 2013, image: toyotacamry, price: "Call for price" },
    { id: 12, name: "Toyota Land Cruiser Prado", year: 2012, image: toyotacamry, price: "Call for price" },
    { id: 13, name: "Jeep Grand Cherokee", year: 2014, image: toyotacamry, price: "Call for price" },
    { id: 14, name: "Hyundai Sonata", year: 2015, image: toyotacamry, price: "Call for price" },
    { id: 15, name: "Kia Sportage", year: 2016, image: toyotacamry, price: "Call for price" },
]

export default function CarSegment() {
    return (
        <section className="bg-[#f4f8fd] font-[Montserrat] py-16 px-6">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#091733]">Cars Available For Sale</h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cars.map((car) => (
                        <article key={car.id} className="flex flex-col rounded-2xl border border-[#d9e4f2] bg-white p-5">
                            <img src={car.image} alt={car.name} className="h-48 w-full rounded-xl object-cover" />
                            <h3 className="mt-4 text-xl font-bold text-[#091733]">{car.name}</h3>
                            <p className="text-sm text-[#5a6b86]">{car.year}</p>
                            <p className="mt-3 font-semibold text-[#091733]">{car.price}</p>

                            <Link
                                to="/contact"
                                className="mt-5 rounded-full bg-[#d8383a] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#c02e30]"
                            >
                                Purchase car
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}