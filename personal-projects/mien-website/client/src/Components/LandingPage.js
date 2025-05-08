
import photo1 from '../Media/Carousel/woman_from_unsplash.jpg';
import photo2 from '../Media/Carousel/mien_woman.png'


const LandingPage = () => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../Media/Carousel', false, /\.(png|jpeg|svg|jpg)$/));


    return (
        <div className='landingPage'>
            <div className="left">
                <p>Hey there, welcome to Mienglish.</p>
                <p>Mienglish is a Mien-English dictionary to help you learn Mien.</p>
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