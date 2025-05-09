import Words from './Words';
import Sounds from './Sounds';
import {useState} from 'react';


const Dictionary = () => {
    const [mes, setMes] = useState("")
    const [editing, setEditing] = useState(false);
  
    const handleSend = (newData) => {
      if (!editing) {
        setMes(newData);
      }
    };

    return (
        <div className='dictContainer'>
            <Words sendMes={setMes} />
            <Sounds 
            getMes={mes}
            setIsEditing={setEditing} />
        </div>
    )
}

export default Dictionary;