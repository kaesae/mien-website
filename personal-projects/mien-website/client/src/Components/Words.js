import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
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
                    <input id='searchbox' value="Search" type="text" onChange={(e) => setSearch(e.target.value)} />
                </div>
                    {data
                    .filter((word) => {
                        return search.toLowerCase() === ''
                        ? word
                        : word.Mien_word.toLowerCase().includes(search)
                        && word.English_meaning.toLowerCase().includes(search)
                    })
                    .map((word) => (
                        <div key={data.id} className='cardContainer'>
                            <div className='wordContainer'>
                                <div className='word'>{word.Mien_word}</div>
                            </div>
                            <div className='details'>
                                <div className='detailstop'>{word['Part of speech']}</div>
                                <div className='detailsbot'>also noun</div>
                            </div>
                            <div className='meaningContainer'>
                                <div>
                                    <p id='def'>{word.English_meaning}</p>
                                    <p id='ex'>{word.Mien_example} [{word.English_example}]</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
            </div>
        </div>
    )
}

export default Words;