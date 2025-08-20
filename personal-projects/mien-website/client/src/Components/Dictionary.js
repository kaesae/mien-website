import Words from './Words';
import Sounds from './Sounds';
import {useState} from 'react';


const Dictionary = () => {
    const [mes, setMes] = useState("")
    const [editing, setEditing] = useState(false);
    const [search, setSearch] = useState("");

    const filterSounds = (search, words) => {
      if (!search) {
          return words;
      }
      return words.filter(word => word.words.includes(search))
  }

    return (
        <div className='dictContainer'>
            <div className='searchContainer'>
              <input 
                id='searchBox' 
                type="text" 
                onChange={(e) => setSearch(e.target.value)} 
                /></div>
            <div className='lists'>
              <Words sendMes={setMes} search={search} />
              <Sounds getMes={mes} setIsEditing={setEditing} /></div>
        </div>
    )
}

export default Dictionary;