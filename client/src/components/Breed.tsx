import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Header from "./Header"
import Rating from "./Rating"
import Loading from "./Loading"
import api from "./AxiosBase"

type Image = {
    url: string,
}

type Images = {
    url: string,
    id: string
}

type Breed = {
    name: string,
    image: string,
    temperament: string,
    adaptability: number,
    affection_level: number,
    grooming: number,
    intelligence: number,
    health_issues: number,
    social_needs: number,
    stranger_friendly: number,
    origin: string,
    reference_image_id: string,
    description: string,
    life_span: string,
    child_friendly: string
}



const Breed = () => {
    const { id } = useParams()
    const [breed, setBreed] = useState<Breed>()
    const [images, setImages] = useState([])
    const [image, setImage] = useState<Image>()
    const [loading, setLoading] = useState(false)


    const fetchBreed = async () => {
        const response = await api.get(`/api/breed?breed=${id}`)
            .then((resp) => {
                fetchImages(resp.data)
                setBreed(resp.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchImages = async (id: string) => {
        const imgId = id[1]
        const response = await api.get(`/api/images?imgId=${imgId}`)
            .then((resp) => {
                setImage(resp.data[0])
                setImages(resp.data)
                setLoading(false)

            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchBreed()
        setLoading(true)
    }, [])
    return (
        <div>
            <Header />
            {loading && <Loading />}
            {!loading && <div>

                <section className="sm:flex gap-14">
                    <img src={image?.url} alt={id} className="mb-4 w-[300px] h-[300px]  rounded-2xl sm:ml-5 md:ml-10 lg:ml-14" />

                    <div className="max-w-[500px]">
                        <div>
                            <h2 className="text-2xl font-medium mb-4">{breed?.name}</h2>
                            <p className="text-base mb-4 leading-6">{breed?.description}</p>
                            <p className="font-semibold mb-4">Temperament: <span className="font-[400]">{breed?.temperament}</span></p>
                            <p className="font-semibold mb-4">Origin: <span className="font-[400]">{breed?.origin}</span></p>
                            <p className="font-semibold mb-5">Lifespan: <span className="font-[400]">{breed?.life_span}</span></p>
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <div className="">
                                <p className="mt-1 mb-4 font-semibold">Adaptablity:</p>
                                <p className="mb-4 font-semibold">Affection level:</p>
                                <p className="mb-4 font-semibold">Child Friendly:</p>
                                <p className="mb-4 font-semibold">Grooming:</p>
                                <p className="mb-4 font-semibold">Intelligence:</p>
                                <p className="mb-4 font-semibold">Health issues:</p>
                                <p className="mb-4 font-semibold">Social needs:</p>
                                <p className="mb-4 font-semibold">Stranger friendly:</p>
                            </div>
                            <div className="">
                                <div className="flex">{<Rating row={breed?.adaptability} />}</div>
                                <div className="flex">{<Rating row={breed?.affection_level} />}</div>
                                <div className="flex">{<Rating row={breed?.child_friendly} />}</div>
                                <div className="flex">{<Rating row={breed?.grooming} />}</div>
                                <div className="flex">{<Rating row={breed?.intelligence} />}</div>
                                <div className="flex">{<Rating row={breed?.health_issues} />}</div>
                                <div className="flex">{<Rating row={breed?.social_needs} />}</div>
                                <div className="flex">{<Rating row={breed?.stranger_friendly} />}</div>
                            </div>
                        </div>
                    </div>





                </section>

                {/* Image section */}

                <section className="grid justify-center">
                    <h2 className="font-medium text-2xl">Other photos</h2>
                    <div className="my-10 grid gap-9 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1100px]">
                        {
                            images?.map((img: Images) => (
                                <img src={img?.url} alt="other images" className="rounded-2xl w-full h-[278px]" key={img.id} />
                            ))
                        }
                    </div>

                </section>
            </div>}
        </div>
    )
}
export default Breed