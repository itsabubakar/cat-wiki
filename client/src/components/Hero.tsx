import Search from "../assets/icons/Search"

const Hero = () => {
    return (
        <div className="hero text-white pt-1 pl-5 rounded-t-2xl">
            <h1 className="text-lg mt-5">CatWiki</h1>
            <p className="max-w-[185px] mt-2">Get to know more about your cat breed</p>
            <form className="border-2 mt-5 w-[100px] bg-white px-2 py-1 rounded-lg flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-inherit w-full outline-none text-black placeholder-gray-800"
                />
                <Search />
            </form>
        </div>
    )
}
export default Hero