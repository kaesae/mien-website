import { text } from '../Resources/text.js';

import photo1 from '../Media/Carousel/woman_from_unsplash.jpg';
import photo2 from '../Media/Carousel/mien_woman.png'


const LandingPage = () => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../Media/Carousel', false, /\.(png|jpeg|svg|jpg)$/));


    return (
        <div className='landingPage'>
            <div className="left">
                <h1 className=''>{`${text[0].landingpage["header"]}`}</h1>
                <p>{`${text[0].landingpage["intro"]}`}</p>
                <h2>{`${text[0].landingpage["subhead1"]}`}</h2>
                <p>{`${text[0].landingpage["point1"]}`}</p>
                <h2>{`${text[0].landingpage["subhead2"]}`}</h2>
                <p>{`${text[0].landingpage["point2"]}`}</p>
                <h2>{`${text[0].landingpage["subhead3"]}`}</h2>
                <p>{`${text[0].landingpage["point3"]}`}</p>
                <h5>{`${text[0].landingpage["cta"]}`}</h5>
            </div>
            <div className='right'>
                <div className="rightSide">
                    <div className="leftMedia">
                        <img className='carouselImage' src={photo1}></img>
                        {/* Incomplete */}
                    {/* {images.map((photo1, index) => {
                        <img className='carouselImage' src={photo1} alt={`Gallery ${index}`} key={index} />
                            })} */}
                    </div>
                    <div className="rightMedia">
                        <img className='carouselImage' src={photo2}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;