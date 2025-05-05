import {useState, useEffect, useRef} from 'react';
import {data} from '../Resources/data'

const Words = ({sendMes}) => {
    const [search, setSearch] = useState("");


    const filterSounds = (search, words) => {
        if (!search) {
            return words;
        }
        return words.filter(word => word.words.includes(search))
    }

    return (
        <div className='cardContainer'>
            <div className='wordsContainer'>
                <button onClick={() => sendMes("b")}>send to sounds</button>

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
                        <button onClick={filterSounds} key={data.id} id='wordCard'>
                            <div className='wordContainer'>
                                <div className='word'>{word.mien.toLowerCase()}</div>
                            </div>
                            <div className='details'>
                                <div className='detailstop'>{word.pos}</div>
                                <div className='detailsbot'>/{word.ipa}/</div>
                            </div>
                            <div className='meaningContainer'>
                                <div>
                                    <p id='def'>{word.eng}</p>
                                    <p id='ex'>{word.mex1} [{word.mtr1}]</p>
                                </div>
                            </div>
                        </button>
                    ))}
                    
            </div>
        </div>
    )
}

export default Words;