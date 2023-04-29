import photo1 from '../Media/Carousel/woman_from_unsplash.jpg';
import photo2 from '../Media/Carousel/mien_woman.png'

const Aside = () => {
    return (
        <aside>
            <div className="asideLeft">
                <img className='carouselImage' src={photo1}></img>
            </div>
            <div className="asideRight">
                <img className='carouselImage' src={photo2}></img>
            </div>
        </aside>
    )
}

export default Aside;