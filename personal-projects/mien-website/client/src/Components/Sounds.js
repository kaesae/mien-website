import {useEffect, useState} from 'react';
import {CVT} from '../Resources/data.js'

const Sounds = ({getMes}) => {
    const [dictionary, setDictionary] = useState("");
    const savedDictionary = dictionary.toLowerCase();

    useEffect(() => {
        setDictionary(getMes);
    }, [getMes])

    

    return (
        <div className='cardContainer'>
            <div className='container'>
                {CVT
                    .filter((sound) => {
                        return dictionary.toLowerCase() === ''
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
                            <div id='wordDetails'>
                                <div id='word'>{sound.Letters}</div></div>
                            <div className='meaningContainer'>
                                <p id='ipa'>/ {sound.IPA} /</p></div>
                            <div id='details'>
                                <div id='top'>{sound.c_mien_example}</div>
                                <div id='btm'>{sound.c_english_meaning}</div></div></div>
                    ))}
            </div>
        </div>
    )
}

export default Sounds;