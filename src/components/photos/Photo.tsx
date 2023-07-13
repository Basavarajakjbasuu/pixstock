import { MdFavoriteBorder } from "react-icons/md"
import { ImageData } from "../../types";

const Photo = ({ imageData }: { imageData:ImageData}) => {

  const {
    alt,
    avg_color,
    width,
    height,
    src: { large }
  } = imageData

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const image = e.target as HTMLElement;
    image.style.opacity = "1";
  };

  return (
    <div className="card gird-item" style={{ backgroundColor : avg_color} }>

      <figure
        className='card-banner'
        style={{"--width": {width}, "--height": {height}} as React.CSSProperties}
        >
        <img
          src={large}
          width={width}
          height={height}
          loading='lazy'
          className='img-cover'
          alt={alt}
          style={{ opacity: 0, transition: 'opacity 0.4s' }}
          onLoad={handleImageLoad}
        />
      </figure>

      <div className="card-content">

        <button
          className="icon-btn small"
          aria-label='Add to your favorites'
          // onClick={() => handleFavoriteClick(id, 'photos' )}
        >
          <span><MdFavoriteBorder /></span>
          <div className="state-layer"></div>
        </button>

      </div>


    </div>
  )
}

export default Photo