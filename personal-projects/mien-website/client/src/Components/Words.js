import {useState, useEffect, useRef} from 'react';
import {data} from '../Resources/data'

const Words = () => {
    const [search, setSearch] = useState("");


    const getFilteredWords = (search, words) => {
        if (!search) {
            return words;
        }
        return words.filter(word => word.words.includes(search))
    }



    // const filteredWords = getFilteredWords(search, words);

    return (
        <div className='bodyContainer'>
            <div className='dictionaryContainer'>
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
                        <div key={data.id} id='wordCard'>
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
                        </div>
                    ))}
                    
            </div>
        </div>
    )
}

export default Words;