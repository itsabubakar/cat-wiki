import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import Header from "./Header"
import { Link } from "react-router-dom"
import { AppContext } from "../App"

type BreedsData = {
    name: string,
    id: string,
    image: {
        url: string
    },
    description: string,
}


const SeeMore = () => {
    const { breeds, setBreeds } = useContext(AppContext)

    const fetchCats = async () => {
        const response = await axios.get('http://localhost:8080/api?limit=10&page=0')
            .then((resp) => {
                setBreeds(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchCats()
    }, [])
    return (
        <div>
            <Header />
            <h2 className="text-3xl font-semibold mb-10 text-[#291507]">10 more cat breeds</h2>
            <div className="grid gap-y-10">
                {
                    breeds.map((breed: BreedsData, index: number) => {

                        return <div className="" key={breed.id}>
                            <Link className="flex gap-x-5" to={`/breed/${breed.id}`}>
                                <img className="min-w-[170px] max-w-[170px] h-[170px] object-cover rounded-xl" src={breed.image.url} alt={breed.name} />
                                <div>
                                    <h3 className="font-medium text-xl text-[#291507] mb-4">{index + 1}. {breed.name}</h3>
                                    <p className="truncated">{breed.description}</p>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default SeeMore