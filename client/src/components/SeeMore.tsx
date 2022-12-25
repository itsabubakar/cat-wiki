import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import Header from "./Header"
import { Link } from "react-router-dom"
import { AppContext } from "../App"
import Loading from "./Loading"
import api from "./AxiosBase"

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
    const [page, setPage] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)


    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        setPage(page - 1)

    }

    const fetchCats = async () => {
        const response = await api.get(`/api?limit=10&page=${page}`)
            .then((resp) => {
                setBreeds(resp.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        fetchCats()
    }, [page])
    return (
        <div>
            <Header />
            <h2 className="text-3xl font-semibold mb-10 text-[#291507]">10 more cat breeds</h2>
            {loading && <Loading />}
            {!loading && <div>
                <div className="grid gap-y-10 justify-center">
                    {
                        breeds.map((breed: BreedsData, index: number) => {

                            return <div className="max-w-[1000px] w-full" key={breed.id}>
                                <Link className="flex gap-x-5 sm:gap-x-8" to={`/breed/${breed.id}`}>
                                    <img className="min-w-[170px] max-w-[170px] h-[170px] object-cover rounded-xl" src={breed.image?.url} alt={breed.name} />
                                    <div>
                                        <h3 className="font-medium text-xl text-[#291507] mb-4">{index + 1}. {breed.name}</h3>
                                        <p className="truncated max-w-[800px]">{breed.description}</p>
                                    </div>
                                </Link>
                            </div>
                        })
                    }
                </div>
                <div className=" flex justify-center gap-x-5 my-5">

                    <button className={`border-2 rounded-lg p-2 py-1 ${page == 0 ? 'bg-gray-400' : 'hover:border-yellow-500 hover:text-yellow-500'}`} disabled={page == 0} onClick={prevPage}>Prev</button>
                    <button className="border-2 rounded-lg p-2 py-1 hover:border-yellow-500 hover:text-yellow-500" onClick={nextPage}>Next</button>
                </div>
            </div>}
        </div>
    )
}
export default SeeMore