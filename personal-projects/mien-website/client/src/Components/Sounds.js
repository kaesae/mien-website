import {useState} from 'react';
import {CVT} from '../Resources/CVT'

const Sounds = () => {
    const [dictionary, setDictionary] = useState("");
    const savedDictionary = dictionary.toLowerCase();

    const getFilteredSounds = (dictionary, sounds) => {
        if (!dictionary) {
            return sounds;
        }
        return sounds.filter(sound => sound.sounds.includes(dictionary))
    }

    // const filteredWords = getFilteredWords(search, words);

    return (
        <div className='soundsContainer'>
            <div className='dictionaryContainer'>
                <div className='searchContainer'>
                    <input 
                    id='soundsInput' 
                    type="text" 
                    onChange={(e) => setDictionary(e.target.value)} />
                </div>
                    {CVT
                    .filter((sound) => {
                        return dictionary.toLowerCase() === ''
                        ? sound
                        : sound.Letters.toLowerCase().includes(dictionary)
                        || sound.English_example.toLowerCase().includes(dictionary)
                    })
                    .map((sound) => (
                        <div key={CVT.id} className='cardContainer'>
                            <div className='wordContainer'>
                                <div className='word'>{sound.Letters}</div>
                            </div>
                            <div className='meaningContainer'>
                                <div>
                                    <p id='ipa'>{sound.IPA}</p>
                                    <p id='mex'>{sound.Mien_example} [{sound.English_example}]</p>
                                </div>
                            </div>
                            <div className='details'>
                                <div className='detailstop'>{sound.c_mien_example}</div>
                                <div className='detailsbot'>{sound.c_english_meaning}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Sounds;