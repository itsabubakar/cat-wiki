import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Breeds = () => {
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        const response = axios.get('http://localhost:8080/api?limit=4&page=0')
            .then((resp) => {
                console.log(resp.data)
                setBreeds(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="bg-[#E3E1DC] px-5 rounded-b-2xl">
            <p className="text-[#291507] font-semibold pt-4">Most Searched Breeds</p>
            <span className="bg-[#291507] w-12 h-1 mt-1 block"></span>
            <div className="flex justify-between">
                <h2 className="text-[#291507] font-bold text-xl mt-5 max-w-[190px]">66+ Breeds For you to discover</h2>
                <Link to={'/seemore'}>See more</Link>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-10 pb-10 ">
                {breeds.map((breed: { name: string, image: { url: string } }) => (
                    <div className="">
                        <img src={breed.image?.url} alt={breed.name} className="h-[130px] object-cover w-full rounded-lg" />
                        <p className="mt-3 font-semibold">{breed.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Breeds