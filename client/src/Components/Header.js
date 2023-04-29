import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="topBottom">
                <Link className='links' to='dictionary'><p>Dictionary</p></Link>
                <Link className='links' to='login'><p>Log In</p></Link>
            </div>
        </header>
    )
}

export default Header;