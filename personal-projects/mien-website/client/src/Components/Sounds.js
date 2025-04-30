import {useState} from 'react';
import {CVT} from '../Resources/CVT'

const Sounds = () => {
    const [search, setSearch] = useState("");


    const getFilteredWords = (search, words) => {
        if (!search) {
            return words;
        }
        return words.filter(word => word.words.includes(search))
    }

    // const filteredWords = getFilteredWords(search, words);

    return (
        <div className='soundsContainer'>
            <div className='dictionaryContainer'>
                <div className='searchContainer'>
                    <input id='searchbox' value="Search" type="text" onChange={(e) => setSearch(e.target.value)} />
                </div>
                    {CVT
                    .filter((letter) => {
                        return search.toLowerCase() === ''
                        ? letter
                        : letter.Letters.toLowerCase().includes(search)
                        && letter.English_meaning.toLowerCase().includes(search)
                    })
                    .map((letter) => (
                        <div key={CVT.id} className='cardContainer'>
                            <div className='wordContainer'>
                                <div className='word'>{letter.Letters}</div>
                            </div>
                            <div className='meaningContainer'>
                                <div>
                                    <p id='def'>{letter.IPA}</p>
                                    <p id='ex'>{letter.Mien_example} [{letter.English_example}]</p>
                                </div>
                            </div>
                            <div className='details'>
                                <div className='detailstop'>{letter.c_mien_example}</div>
                                <div className='detailsbot'>{letter.c_english_meaning}</div>
                            </div>
                        </div>
                    ))}
                    
            </div>
        </div>
    )
}

export default Sounds;