const ContactMe = () => {
    return (
        <div className="contactMe">
            <input type="text" placeholder="Name" required></input>
            <input type="email" placeholder="Email" required /><br />
            <textarea placeholder="Message" required /> <br />
            <button>Send</button>
        </div>
    )
}

export default ContactMe;