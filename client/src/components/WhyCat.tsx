import LeftArrow from "../assets/icons/LeftArrow"

const WhyCat = () => {
    return (
        <div className="mt-10">
            <span className="bg-[#291507] w-12 h-1 mt-1 block mb-5"></span>
            <h2 className="text-5xl font-semibold text-[#291507]">Why should you have a cat?</h2>
            <p className="mt-10 text-lg font-medium mb-5">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
            <a target='blank' href="https://www.lifehack.org/285000/14-reasons-why-you-should-have-cat-home" className="text-gray-700 text-sm mb-5 inline-block flex gap-3 font-semibold items-center">READ MORE<LeftArrow /></a>
        </div>
    )
}
export default WhyCat