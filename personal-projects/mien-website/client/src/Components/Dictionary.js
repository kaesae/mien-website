import Words from './Words';
import Sounds from './Sounds';
import Input from './Input';
import {useState, useEffect, useRef} from 'react';


const Dictionary = () => {
    // const [search, setSearch] = useState("");
    const [mes, setMes] = useState("")


    return (
        <div className='dictContainer'>
            {/* <input 
                id='searchBox' 
                type="text" 
                onChange={(e) => setSearch(e.target.value)} 
                /> */}
            {/* <Input /> */}
            <Words sendMes={setMes} />
            <Sounds getMes={mes} />
        </div>
    )
}

export default Dictionary;