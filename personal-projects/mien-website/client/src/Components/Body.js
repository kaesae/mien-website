import Logo from '../Media/logo.png';
import {Link} from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Link className='links' to='/'><img className="logo" src={Logo} /></Link>
        </div>
    )
}

export default Body;