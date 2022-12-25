import { Link } from 'react-router-dom'
// import catWikiLogo from '../assets/CatWikiLogo.svg'

const Header = () => {
    return (
        <header className='mb-4'>
            {/* <Link to='/'><img src={catWikiLogo} alt="" /></Link> */}
            <Link to='/'>Home page</Link>
        </header>
    )
}
export default Header