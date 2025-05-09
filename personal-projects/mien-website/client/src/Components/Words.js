import {useState, useEffect, useRef} from 'react';
import {data} from '../Resources/data'

const Words = ({sendMes}) => {
    const [search, setSearch] = useState("");
    const [it, setIt] = useState("");


    const filterSounds = (search, words) => {
        if (!search) {
            return words;
        }
        return words.filter(word => word.words.includes(search))
    }

    return (
        <div className='cardContainer'>
            <div className='wordsContainer'>
                <button onClick={() => sendMes("buoz")}>send to sounds {`${it}`}{`${data.id}`}</button>
                <div className='searchContainer'>
                    <input 
                    id='searchBox' 
                    type="text" 
                    onChange={(e) => setSearch(e.target.value)} 
                    />
                </div>
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
                        id='card'
                        className='wordCard'>
                            <div className='wordContainer'>
                                <div className='word'>
                                    {word.mien.toLowerCase()}</div>
                            </div>
                            <div className='details'>
                                <div className='detailsTop'>
                                    {word.pos}
                                    </div>
                                <div className='detailsBot'>
                                    / {word.ipa} /
                                    </div>
                            </div>
                            <div className='meaningContainer'>
                                <div>
                                    <p id='def'>
                                        {word.eng}</p>
                                    <p id='ex'>
                                        {word.mex1} [{word.mtr1}]</p>
                                </div>
                            </div>
                        </button>
                    ))}
                    
            </div>
        </div>
    )
}

export default Words;