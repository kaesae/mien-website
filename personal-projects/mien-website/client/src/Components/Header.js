import { useState } from 'react';
import {Link} from 'react-router-dom';
import ContactMe from './ContactMe';
import Logo from '../Media/logo.png';


const Header = (show, setShow) => {
    const [menu, setMenu] = useState(false);

    return (
        <header id="header">
            <button 
            id='hamburger'
            onClick={() => setMenu(!menu)}>
                ☰
            </button>
            <ul className={`menu ${menu ? 'open' : ''}`}>
                <li><Link className='links' to='dictionary'><p>Dictionary</p></Link></li>
                {/* <li><Link className='links' to='login'><p>Log In</p></Link></li> */}
                <li><Link className='links' to='about'><p>About</p></Link></li>
                <li><ContactMe /></li>
            </ul>
            <Link className='links' to='/'><img className="logo" src={Logo} /></Link>
        </header>
    )
}

export default Header;