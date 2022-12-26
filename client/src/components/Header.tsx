import { Link } from 'react-router-dom'
import CatLogo from '../assets/icons/CatLogo'

const Header = () => {
    return (
        <header className='mb-4'>
            <Link to={'/'}><CatLogo /></Link>
        </header>
    )
}
export default Header