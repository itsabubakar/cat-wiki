// import catWikiLogo from '../assets/CatWikiLogo.svg'

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-10 rounded-t-2xl px-5 py-5 flex flex-col sm:flex-row justify-between">
            {/* <img src={catWikiLogo} alt="" className="invert contrast-[150%] w-20 mb-3" /> */}
            <p className='font-extralight'>created by <span className='font-semibold underline'>SadiqB</span></p>
        </footer>
    )
}
export default Footer