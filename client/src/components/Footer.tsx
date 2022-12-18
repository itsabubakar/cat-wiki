import catWikiLogo from '../assets/CatWikiLogo.svg'

const Footer = () => {
    return (
        <div className="bg-black text-white mt-5 rounded-t-2xl px-5 py-5">
            <img src={catWikiLogo} alt="" className="invert contrast-[150%] w-20 mb-3" />
            <p className='font-extralight'>created by <span className='font-semibold underline'>SadiqB</span></p>
        </div>
    )
}
export default Footer