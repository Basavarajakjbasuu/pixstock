import { CardVideoBannerProps } from "../types"

const CardVideoBanner = ({ gridArea, videoUrl, height, width }: CardVideoBannerProps) => {
  
  return (
    <div
      className="card-banner"
      style={{
        "gridArea": `${gridArea}`
      }}
    >
      <video
        className="video"
        src={videoUrl}
        width={width}
        height={height}
        autoPlay
        muted
        loop
      > 
      </video>
    </div>
  )
}

export default CardVideoBanner