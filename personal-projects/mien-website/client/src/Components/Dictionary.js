import Words from './Words';
import Sounds from './Sounds';
import {useState} from 'react';


const Dictionary = () => {
    const [mes, setMes] = useState("")


    return (
        <div className='dictContainer'>
            <Words sendMes={setMes} />
            <Sounds getMes={mes} />
        </div>
    )
}

export default Dictionary;