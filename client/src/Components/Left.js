import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import '../CSS/left.css'

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