import { Link } from 'react-router-dom'

import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"

const Left = () => {

    return (
        <div className="leftSide">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Left;