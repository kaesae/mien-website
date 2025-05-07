import {useEffect, useState} from 'react';
import {CVT} from '../Resources/CVT'

const Sounds = ({getMes}) => {
    const [dictionary, setDictionary] = useState("");
    const savedDictionary = dictionary.toLowerCase();

    useEffect(() => {
        setDictionary(getMes);
    }, [getMes])

    const handleChange = (e) => {
        setDictionary(e.target.value)
    }

    return (
        <div className='cardContainer'>
            <div className='soundsContainer'>
                <div className='searchContainer'>
                    <input 
                    id='soundsInput' 
                    type="text" 
                    onChange={(e) => setDictionary(e.target.value)} />
                </div>
                {CVT
                    .filter((sound) => {
                        return getMes.toLowerCase() === ''
                        ? sound
                        : sound.Letters.toLowerCase().includes(dictionary)
                        || sound.c_mien_example.toLowerCase().includes(dictionary)
                    })
                    // Return it in lowercase
                    .map((sound) => (
                        <div 
                        key={CVT.id} 
                        id='card'
                        className='soundCard'>
                            <div className='soundContainer'>
                                <div className='word'>{sound.Letters}</div>
                            </div>
                            <div className='meaningContainer'>
                                <div>
                                    <p id='ipa'>/ {sound.IPA} /</p>
                                </div>
                            </div>
                            <div className='details'>
                                <div className='detailsTop'>{sound.c_mien_example}</div>
                                <div className='detailsBot'>{sound.c_english_meaning}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Sounds;