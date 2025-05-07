import {useState, useEffect, useRef} from 'react';

const Input = () => {
    const [search, setSearch] = useState("");


    const getFilteredWords = (search, words) => {
        if (!search) {
            return words;
        }
        return words.filter(word => word.words.includes(search))
    }

    // const filteredWords = getFilteredWords(search, words);

    return (
        <div className='cardContainer'>
            <div className='searchContainer'>
                <input 
                id='searchBox' 
                type="text" 
                onChange={(e) => setSearch(e.target.value)} 
                />
            </div>
        </div>
    )
}

export default Input;