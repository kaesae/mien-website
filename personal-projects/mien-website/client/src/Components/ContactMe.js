import {useState} from 'react';

const ContactMe = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control popup visibility

    const openPopup = () => setIsOpen(true); // Open the popup
    const closePopup = () => setIsOpen(false); // Close the popup
  
    return (
      <div className="popup-container">
        <div onClick={openPopup}>Contact Me</div>
  
        {isOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Popup Title</h2>
              <p>This is the content of the popup!</p>
              <div className="contactMe">
                <input type="text" placeholder="Name" required></input>
                <input type="email" placeholder="Email" required /><br />
                <textarea placeholder="Message" required /> <br />
                <button className='popup'>Send</button>
              </div>
              <button className='popup' onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }





export default ContactMe;