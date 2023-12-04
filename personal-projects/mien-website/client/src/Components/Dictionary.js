import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {data} from '../Resources/data'

const Dictionary = () => {
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
            <Header />
            <div className='dictionaryContainer'>
                <label className='wordSearch'>Search Words </label>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
                <table id='wordsTable'>
                    <tbody>
                    <tr className=''>
                        <td>Mien Word</td>
                        <td>English Meaning</td>
                        <td>Part of Speech</td>
                    </tr>
                    {data
                    .filter((word) => {
                        return search.toLowerCase() === ''
                        ? word
                        : word.Mien_word.toLowerCase().includes(search)
                        || word.English_meaning.toLowerCase().includes(search)
                    })
                    .map((word) => (
                        <tr key={data.id} className='populatedTable'>
                            <td>{word.Mien_word}</td>
                            <td>{word.English_meaning}</td>
                            <td>{word['Part of speech']}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Dictionary;