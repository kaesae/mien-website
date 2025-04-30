import { useState } from 'react';
import {Link} from 'react-router-dom';
import Body from './Body';
import ContactMe from './ContactMe';

const Header = (show, setShow) => {
    return (
        <header id="header">
                <Link className='links' to='dictionary'><p>Dictionary</p></Link>
                <Link className='links' to='login'><p>Log In</p></Link>
                <Link className='links' to='about'><p>About</p></Link>
                <Link className='links' to='contactme'><p>Contact Me</p></Link>
        </header>
    )
}

export default Header;