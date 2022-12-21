import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Header from "./Header"
import { AppContext } from "../App"
import Rating from "./Rating"

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
    const [breed, setBreed] = useState<Breed>()
    const [images, setImages] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(false)


    const fetchBreed = async () => {
        const response = await axios.get(`http://localhost:8080/api/breed?breed=${id}`)
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
        const response = await axios.get(`http://localhost:8080/api/images?imgId=${imgId}`)
            .then((resp) => {
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

            {loading && <div>Loading</div>}
            {!loading && <div>
                <section>
                    <img src={images[1]?.url} alt={id} className="mb-4 w-[300px] h-[300px] object-cover rounded-2xl" />
                    <div>
                        <h2 className="text-2xl font-medium mb-4">{breed?.name}</h2>
                        <p className="text-lg mb-4 leading-6">{breed?.description}</p>
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




                </section>

                {/* Image section */}

                {/* <section>
                    {
                        images?.map((img) => (
                            <img src={img.url} alt="" />
                        ))
                    }
                </section> */}
            </div>}
        </div>
    )
}
export default Breed