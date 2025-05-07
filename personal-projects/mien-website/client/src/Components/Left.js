import Logo from '../Media/logo.png';
import {Link} from 'react-router-dom';

const Left = () => {

    return (
        <div className="leftSide">
            <Link className='links' to='/'><img className="logo" src={Logo} /></Link>
            <p>Hey there, welcome to Mienglish.</p>
            <p>Mienglish is a Mien-English dictionary to help you learn Mien.</p>
        </div>
    )
}

export default Left;