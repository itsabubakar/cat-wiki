import imageOne from '../assets/image1.png'
import imageTwo from '../assets/image2.png'
import imageThree from '../assets/image3.png'

const Grid = () => {
    return (
        <div className="lg:w-1/2 imgGrid text-white text-center">
            <img src={imageTwo} alt="img" className='w-full h-full imgTwo' />
            <img src={imageThree} alt="img" className='w-full h-full imgThree' />
            <img src={imageOne} alt="img" className='w-full h-full imgOne' />

        </div>
    )
}
export default Grid