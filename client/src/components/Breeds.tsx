import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/icons/LeftArrow"
import Loading from "./Loading"
import api from "./AxiosBase"


const Breeds = () => {
    const [breeds, setBreeds] = useState([])
    const [loading, setLoading] = useState<boolean>(false)

    const fectchBreeds = async () => {
        setLoading(true)
        const response = await api.get('/api?limit=4&page=0')
            .then((resp) => {
                setBreeds(resp.data)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            })
    }



    useEffect(() => {
        fectchBreeds()
    }, [])

    return (
        <div className="bg-[#E3E1DC] px-5 rounded-b-2xl flex justify-center">
            <div className="max-w-[1000px] w-full">
                <p className="text-[#291507] font-semibold pt-4">Most Searched Breeds</p>
                <span className="bg-[#291507] w-12 h-1 mt-1 block"></span>
                <div className="flex justify-between">
                    <h2 className="text-[#291507] font-bold text-xl mt-5 max-w-[190px]">66+ Breeds For you to discover</h2>
                    <Link to={'/seemore'} className="font-semibold flex gap-1 text-sm">See more<LeftArrow /></Link>
                </div>

                {loading && <Loading />}

                {!loading && <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-2 gap-y-6 pt-10 pb-10 ">
                    {breeds.map((breed: { id: string, name: string, image: { url: string } }) => (
                        <Link to={`/breed/${breed.id}`} className="" key={breed.id}>
                            <img src={breed.image?.url} alt={breed.name} className="h-[130px] sm:w-[220px] sm:h-[220px] sm:object-cover w-full rounded-lg" />
                            <p className="mt-3 font-semibold">{breed.name}</p>
                        </Link>
                    ))}
                </div>}
            </div>
        </div>
    )
}
export default Breeds