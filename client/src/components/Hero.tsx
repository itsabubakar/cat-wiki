import { useEffect, useRef, useState } from "react"
import Search from "../assets/icons/Search"
import api from "./AxiosBase"
import AutoComplete from "./AutoComplete"
import { useNavigate } from "react-router-dom"


const Hero = () => {
    const [names, setNames] = useState([])
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const idSearch: any = names?.filter(
            (suggestion: { name: string }) => suggestion.name.toLowerCase().indexOf(value) > -1
        )
        let id = idSearch[0].id
        console.log(id);
        navigate(`/breed/${id}`)
    }




    const fetchBreed = async () => {
        const response = await api.get('/api/names')
            .then((resp) => {
                setNames(resp.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchBreed()
    }, [])
    return (
        <div className="hero text-white pt-1 pl-5 rounded-t-2xl grid justify-items-center items-center">
            <div className="max-w-[1080px] w-full">
                <h1 className="text-lg mt-5">CatWiki</h1>
                <p className="max-w-[185px] mt-2">Get to know more about your cat breed</p>
                <form onSubmit={handleSubmit} className=" mt-5 sm:w-[390px] py-1 flex items-center">
                    <AutoComplete
                        data={names}
                        value={value}
                        setValue={setValue}
                    />
                </form>
            </div>
        </div>
    )
}
export default Hero