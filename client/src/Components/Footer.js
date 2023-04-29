import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="topBottom">
                <Link className='links' to='/about'><p>About</p></Link>
                <Link className='links' to='/contact'><p>Contact Me</p></Link>
            </div>
        </footer>
    )
}

export default Footer;