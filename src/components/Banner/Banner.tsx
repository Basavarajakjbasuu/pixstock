
import { CardImageBanner, CardVideoBanner } from "..";
import { BannerProps } from "../types";

import "./banner.css";

const Banner = ({ heading, description, cardImageData, cardVideoData, index }: BannerProps) => {

  return (
    <div className={`banner-card ${index}`}>

      <div className="card-content">

        <h3 className="headline-medium card-title">
          {heading}
        </h3>

        <p className="body-large card-text">
          {description} 
        </p>

        <a href="/" className={`btn btn-${index}`}>
          <span className="label-large text">Explore now</span>

          <div className="state-layer"></div>
        </a>
      </div>

      {cardImageData &&
        <div className="card-grid">

        {cardImageData.map((item) => (
          <CardImageBanner
            key={item.id}
            imageUrl={item.imageUrl}
            gridArea={item.gridArea}
          />   
        ))}
          
        </div>  
      }

      {
        cardVideoData && 
        <div className="card-grid">

        {cardVideoData.map((item) => (
          <CardVideoBanner
            key={item.id}
            gridArea={item.gridArea}
            videoUrl={item.videoUrl}
            width={item.width}
            height={item.height}
          />   
        ))}
        
      </div>
      }
    </div>
  )
}

export default Banner