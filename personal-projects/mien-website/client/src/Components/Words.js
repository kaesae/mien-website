import {useState, useEffect, useRef} from 'react';
import {data} from '../Resources/data'

const Words = ({sendMes, search}) => {
    const [it, setIt] = useState("");

    return (
        <div className='cardContainer'>
            <div className='container'>
                    {data
                    .filter((word) => {
                        return search.toLowerCase() === ''
                        ? word
                        : word.mien.toLowerCase().includes(search)
                        || word.eng.toLowerCase().includes(search)
                    })
                    .map((word) => (
                        <button 
                        key={data.id} 
                        onClick={() => {
                            setIt(data.id);
                            console.log(data);
                        }} 
                        id='card'>
                            <div id='wordDetails'>
                                <div id='word'>
                                    {word.mien.toLowerCase()}</div>
                                <div id='details'>
                                    <div id='top'>
                                        {word.pos}</div>
                                    <div id='btm'>
                                        / {word.ipa} /</div></div></div>
                            <div id='meanings'>
                                <div id='meaning'>
                                    <p id='def'>
                                        {word.eng}</p>
                                    <p id='ex'>
                                        {word.mex1} [{word.mtr1}]</p></div></div>
                        </button>
                    ))}
                    
            </div>
        </div>
    )
}

export default Words;